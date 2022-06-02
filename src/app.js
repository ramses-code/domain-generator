function domainGenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let counter = 0;

  for (let i = 0; i < pronoun.length; i++) {   
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) { 
        counter++;
        console.log(counter, pronoun[i] + adj[j] + noun[k] + ".com");       
      }
      let aux = pronoun[0];
        pronoun[0] = pronoun[1];
        pronoun[1] = aux;
      let aux2 = adj[0];
        adj[0] = adj[1];
        adj[1] = aux2;
    }
    let aux = pronoun[0];
        pronoun[0] = pronoun[1];
        pronoun[1] = aux;
      let aux2 = adj[0];
        adj[0] = adj[1];
        adj[1] = aux2;
  }
}
domainGenerator();
