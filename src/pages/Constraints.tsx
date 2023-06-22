import _ from "lodash";
import letterDimensions from "../assets/constraints/_letterDimensions";

function _generateSequence(height: number, width: number, letters: string) {
  const sequence = [];
  let translateFactor = 0;

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const rawLetterWidth = letterDimensions[letter].width;
    const rawLetterHeight = letterDimensions[letter].height;
    const newLetterWidth = (rawLetterWidth * height) / rawLetterHeight;
    const scaleFactor = _.random(0.1, 3);

    sequence.push(
      <img
        src={`/src/assets/constraints/${letter}.svg`}
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
      <div className="space-y-1">
        <h1>Designing with constraints</h1>
        <p className="font-light text-gray-500">June 21, 2023</p>
      </div>
      <div className="flex space-x-[1px]">
        {_generateSequence(98, 48 * 7, "HYGIENE")}
      </div>
    </div>
  );
}
