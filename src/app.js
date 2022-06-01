function domainGenerator() {
  let pronoun = ["the"];
  let adj = ["destroyer", "suicide"];
  let noun = ["squad", "netflownet", "audio"];
  let extentsions = ["com", "net", "io"];
  let counter = 0;

  pronoun.forEach(elePronoun => {
    adj.forEach(eleAdj => {
      noun.forEach(eleNoun => {
        extentsions.forEach(eleExtensions => {
          if (eleNoun.endsWith(eleExtensions)) {
            let aux = eleNoun.slice(0, -eleExtensions.length);
            counter++;
            console.log(
              `${counter}-> ${elePronoun}${eleAdj}${aux}.${eleExtensions}`
            );
          } else {
            counter++;
            console.log(
              `${counter}-> ${elePronoun}${eleAdj}${eleNoun}.${eleExtensions}`
            );
          }
        });
      });
    });
  });
}
domainGenerator();
