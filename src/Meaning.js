import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <strong>Definition: </strong>
      {props.meaning.definition}
      <br />
      <Example example={props.meaning.example} />
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
      <Antonyms antonyms={props.meaning.antonyms} />
    </div>
  );
}
