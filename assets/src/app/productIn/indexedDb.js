import { addComment } from "./addComment";
import { renderDb } from "./addComment";
import { deleteComment } from "./addComment";
export const connectToDb = () => {
  const dbRequest = indexedDB.open("comments&question", 8);
  dbRequest.onsuccess = async function (event) {
    addComment(event.target.result);
    renderDb(event.target.result);
    // deleteComment(event.target.result);

    // return event.target.result;
  };

  dbRequest.onupgradeneeded = function (event) {
    alert("onupgradeneeded");
    const commentsTb = event.target.result.createObjectStore("comments", {
      keyPath: "id",
    });
    const questionsTb = event.target.result.createObjectStore("questions", {
      keyPath: "id",
    });
    // return event.target.result;
    // commentsTb.transaction.oncomplete = function (event) {
    // };
  };

  dbRequest.onerror = function (event) {
    alert(`error ${event}`);
  };
};
