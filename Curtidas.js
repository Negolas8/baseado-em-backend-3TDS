const feedJSON = require('./feed.json');

function curit(feed, id) {
    const post = feed[0].id === id ? feed[0] :
                feed[1].id === id ? feed[1] : feed[2];
}

if(!post) {
    console.log("Post não encontrado.");
    return; //Vai verificar e para o processo
}

if (!post.publicado) {
    console.log("Não é possível curtit este post.");
    return;
}

post.metricas.curitdas++;
console.log(`  Post de @${post.autor} agora tem ${post.metricas.curtidas}curtidas. `);

function descurtir (feed, id) {
    const post = feed[0].id === id? feed [0]: feed [1].id === id? feed[1]:
    feed [2];
    }

    if (post.metricas.curtidas === 0) { //Caso as curtidas fiquem em zero
    console.log("Este post já está com 0 curtidas");
    }
    I