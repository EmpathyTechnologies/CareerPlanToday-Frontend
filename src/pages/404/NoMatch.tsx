import compilation from "../../assets/images/notfound/notfound-compilation.jpg";
import hyena from "../../assets/images/notfound/notfound-hyena.jpg";
import lizard from "../../assets/images/notfound/notfound-lizard.jpg";
import parakeet from "../../assets/images/notfound/notfound-parakeet.jpg";

export default function NoMatch(props: any) {
  const random404Components = [compilation, hyena, lizard, parakeet];
  const RandomPage = random404Components[Math.floor(Math.random() * random404Components.length)];

  return (
    <div>
      <RandomPage />
    </div>
  );
}
