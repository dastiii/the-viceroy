import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUtensils,
  faBoxes,
  faSpinner,
  faSmileWink,
  faCircle,
  faFilePdf,
  faInfoSquare,
  faCheckCircle,
  faEmptySet,
  faSpinnerThird,
  faTimesCircle,
  faMeat,
  faPhone,
  faHome,
  faTruckLoading,
  faSearch,
  faBoxCheck,
  faFileContract,
  faHatChef,
  faWarehouseAlt,
  faBoxOpen,
  faWindTurbine,
  faPlay,
  faCheckSquare,
  faSquare,
  faTachometer,
  faChairOffice,
  faGasPump,
  faPlusSquare,
  faMinusSquare
} from "@fortawesome/pro-duotone-svg-icons";
import Vue from "vue";

library.add(
  faSpinner,
  faBoxes,
  faSmileWink,
  faCircle,
  faFilePdf,
  faEmptySet,
  faCheckCircle,
  faInfoSquare,
  faSpinnerThird,
  faTimesCircle,
  faMeat,
  faPhone,
  faHome,
  faTruckLoading,
  faSearch,
  faBoxCheck,
  faFileContract,
  faHatChef,
  faWarehouseAlt,
  faBoxOpen,
  faWindTurbine,
  faPlay,
  faUtensils,
  faCheckSquare,
  faSquare,
  faTachometer,
  faChairOffice,
  faGasPump,
  faPlusSquare,
  faMinusSquare
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default library;
