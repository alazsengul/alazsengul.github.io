import _ from "lodash";
import letterDimensions from "../../public/static/constraints/_letterDimensions";
import TextLink from "../components/TextLink";
import { Helmet } from "react-helmet";

function _generateSequence(letters: string, height: number, stretch = true) {
  const sequence = [];
  let translateFactor = 0;

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const rawLetterWidth = letterDimensions[letter].width;
    const rawLetterHeight = letterDimensions[letter].height;
    const newLetterWidth = (rawLetterWidth * height) / rawLetterHeight;
    const scaleFactor = stretch ? _.random(0.5, 2.5) : 1;

    sequence.push(
      <img
        src={`/static/constraints/${letter}.svg`}
        style={{
          height: `${height}px`,
          width: `${newLetterWidth}px`,
          transform: `translateX(${translateFactor}px) scaleX(${scaleFactor})`,
          transformOrigin: "left",
        }}
      />
    );

    translateFactor += newLetterWidth * (scaleFactor - 1);
  }

  return sequence;
}

export default function Constraints() {
  return (
    <div className="max-w-screen-md mx-auto rounded-md text-sm leading-4 text-gray-700 p-4 space-y-8">
      <Helmet>
        <title>Designing with constraints</title>
      </Helmet>
      <div className="space-y-1">
        <h1>Designing with constraints</h1>
        <p className="font-light text-gray-500">June 21, 2023</p>
      </div>
      <div className="leading-5 space-y-4">
        <div>Constraints define creativity.</div>
        <div>
          Imagine you are given the task to design a logo for my name with the
          following constraints:
        </div>
        <div>
          <li>Text-based, one-line logo.</li>
          <li>
            <TextLink url="https://rsms.me/inter/">Inter font</TextLink>, black
            weight.
          </li>
          <li>Letters must have 10px height.</li>
          <li>Font color black.</li>
        </div>
        <div>
          I came up with the below logo. You can refresh this page to see
          alternate versions.
        </div>
        <div className="flex space-x-[2px] items-baseline">
          {_generateSequence("ALAZSENGUL", 10)}
        </div>
        <div>
          Limit yourself with reasonable constraints and you'll be surprised
          what you come out with.
        </div>
      </div>
    </div>
  );
}
