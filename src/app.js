import "bootstrap";
import "./style.css";

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = [".com", ".net"];

for ( let p = 0; p<pronoun.lenght; p++) {
  for (let a = 0; a<adj.lenght; a++) {
    for (let n = 0; n< noun.lenght; n++) {
      for (let e = 0; e< extension.lenght; e++) {
          console.log( pronoun[p] + adj[a] + noun[n] + extension[e]);
      }
    }
  }
}