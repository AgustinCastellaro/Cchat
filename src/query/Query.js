const API = "https://randomuser.me/api/?results=15";

export function query(){
    return fetch(API).then(response => response.json());
}
