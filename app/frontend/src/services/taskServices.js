import axios from "axios";
const apiUrl = process.env.REACT_APP_BACKEND_URL || 'http://k8s-workshop-mainlb-b7f24ec5a6-211103818.us-west-2.elb.amazonaws.com/api/tasks';
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}
export function addTask(task) {
    return axios.post(apiUrl, task);
}
export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}
export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}