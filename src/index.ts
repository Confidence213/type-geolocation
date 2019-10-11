import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

// console.log("user", user);
// console.log("company", company);

/*
we can create a map using directly new google.maps.Map(), but the problem
is that all the methods from google are exposed to be used by other developer
The idea is to create a CustomMap class from the original to isolate methods
*/

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
