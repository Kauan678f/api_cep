const CEP = require("../models/CEP")

const { increment, getCount, getCountSucess, getCountFailed } = require('../Request')

class CEPController {
    async findCidade(request, response){
        let cep = request.params.cep;

        if(cep.length === 9 || cep.length === 8){
            try {
                let data = await CEP.findCidade(cep);
                if(!data.ok){
                    increment(false)
                    response.status(404)
                    response.json({ ok: false, errorMessage: "CEP não encontrado!" });
                    return;
                }
                data.data.cep = data.data.cep.slice(0, 5) + "-" + data.data.cep.slice(5);
                increment(true)
                response.status(200)
                response.json({ ok: true, response: data.data});

                return;
            }catch(error){
                increment(false)
                response.status(406)
                response.json({ ok: false, errorMessage: "Erro no sistema, tente outra vez!"});
                return;
            }  
        }

        increment(false)
        response.status(406)
        response.json({ ok: false, errorMessage: "CEP invalido" });
        return;


        
    }
}

module.exports = new CEPController();