import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

const URL = "https://api.breakingbadquotes.xyz/v1/quotes";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(`${URL}/${counter}`);

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />
      {
        isLoading 
          ? <LoadingQuote /> 
          : <Quote quote={quote} author={author} />
      }
      <button className="btn btn-primary" onClick={decrement} disabled={counter === 1}>
        Previous Quote
      </button>
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
