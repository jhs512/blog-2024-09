import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToEye } from "@fortawesome/free-solid-svg-icons/faArrowsToEye";

export default function Home() {
  return (
    <div className="text-blue-500">
      안녕하세요. <FontAwesomeIcon icon={faArrowsToEye} />
    </div>
  );
}
