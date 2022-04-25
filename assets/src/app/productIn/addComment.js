let db;
const commentsContainer = document.querySelector(".comments-list-container");
export const addComment = () => {
  const submitCommentForm = document.querySelector(".submit-comment-form");
  const subComment = submitCommentForm.querySelector(".submit-cq-btn");

  //////////////////////create indexedDB

  const dbRequest = indexedDB.open("comments&question", 7);
  dbRequest.onsuccess = function (event) {
    db = event.target.result;
    renderDb();
  };

  dbRequest.onupgradeneeded = function (event) {
    db = event.target.result;
    alert("onupgradeneeded");
    const commentsTb = db.createObjectStore("comments", { keyPath: "id" });
    // commentsTb.transaction.oncomplete = function (event) {
    // };
  };

  dbRequest.onerror = function (event) {
    alert(`error ${event}`);
  };

  //click***********
  subComment.addEventListener("click", (e) => {
    e.preventDefault();
    const list = [];
    const text = document.getElementById("comment-text").value;

    const now = new Date();
    const commentId = now.getTime();
    const nowDate = now.toLocaleDateString("fa-IR", {
      numberingSystem: "latn",
    });
    const nowTime = now.toLocaleTimeString("fa-IR", {
      numberingSystem: "latn",
    });
    const cheakedRadios = submitCommentForm.querySelectorAll(
      "input[type=radio]:checked"
    );
    cheakedRadios.forEach((item) => {
      //helper [ "package3", "quality5", "satisfaction2", "pickle2", "caffeine3", "perfume3", "قهوه خوش مزه ای بود", "1401/2/4", "18:53:56" ]
      list.push(item.dataset.in);
    });
    list.push(text, nowDate, nowTime);
    // console.log(list);
    const creatDiv = document.createElement("div");
    creatDiv.classList.add("comment-list-content");
    creatDiv.innerHTML = `<div class="comment-content-card">
                            <div class="user-data">
                              <div class="user-img-box">
                                <img src="./assets/src/image/icon/Compare.png" alt="">
                              </div>
                              <div class="comment-list-username">
                                <span>آرکادیو الکساندر</span>
                                <span>${list[6]} ${list[7]}</span>
                              </div>
                            </div>
                            <div class="user-text">
                              <p>${list[8]}</p>
                            </div>
                            <div class="user-comment-down">
                              <div class="delete-comment">
                                <button class="delete-comment-btn" data-keyid="${commentId}"></button>
                              </div>
                              <div class="like-comment">
                                <span>امتیاز شما به این نظر:</span>
                                <div class="stars-like">
                                <div class="c-like-stars">
                                  <input type="radio" name="like-c" id="like-c-1">
                                  <label for="like-c-1"></label>
                                  <input type="radio" name="like-c" id="like-c-2">
                                  <label for="like-c-2"></label>
                                  <input type="radio" name="like-c" id="like-c-3">
                                  <label for="like-c-3"></label>
                                  <input type="radio" name="like-c" id="like-c-4">
                                  <label for="like-c-4"></label>
                                  <input type="radio" name="like-c" id="like-c-5">
                                  <label for="like-c-5"></label>
                                </div>
                                <div class="like-comment">
                                  <div class="like-hand-area"><a href="#" class="like-hand">12</a></div>
                                  <div class="dislike-hand-area"><a href="#" class="dislike-hand">3</a></div>
                                  
                                </div>
                                </div>
                              </div>
                              <div class="user-rate">
                          <div class="c-rate-box">
                          <div class="rate-box-main rate-box-main-c">
                            <div class="mizan-box">
                              <span class="mizan-lbl">بسته بندی</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  list[0] * 20
                                }%"
                                  ><span class="mizan-num">${list[0]}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">کیفیت</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  list[1] * 20
                                }%"
                                  ><span>${list[1]}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">رضایت</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  list[2] * 20
                                }%"
                                  ><span>${list[2]}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">کافئین</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  list[4] * 20
                                }%"
                                  ><span>${list[4]}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">ترشی</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  list[3] * 20
                                }%"
                                  ><span>${list[3]}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                          <span class="mizan-lbl">عطرو بو</span>
                          <div class="mizan mizan-c">
                            <span class="mizan-in" style="width: ${
                              list[5] * 20
                            }%"
                              ><span>${list[5]}</span>
                            </span>
                          </div>
                            </div>
                          </div>
                          </div>
                              </div>
                            </div>
                          </div>`;
    commentsContainer.prepend(creatDiv);
    deleteComment();
    if (!db) {
      return;
    }
    const commentsStore = db
      .transaction("comments", "readwrite")
      .objectStore("comments");
    commentsStore.add({
      id: commentId,
      package: list[0],
      quality: list[1],
      satisfaction: list[2],
      pickle: list[3],
      caffeine: list[4],
      perfume: list[5],
      text: list[6],
      date: list[7],
      time: list[8],
    });
  });
};

const renderDb = () => {
  const commentsStore = db
    .transaction("comments", "readwrite")
    .objectStore("comments");
  const request = commentsStore.getAll();
  request.onsuccess = function () {
    const htmlcode = request.result.map((item) => {
      const createDiv = document.createElement("div");
      createDiv.classList.add("comment-list-content");
      createDiv.innerHTML = `<div class="comment-list-content">
                          <div class="comment-content-card">
                            <div class="user-data">
                              <div class="user-img-box">
                                <img src="./assets/src/image/icon/Compare.png" alt="">
                              </div>
                              <div class="comment-list-username">
                                <span>آرکادیو الکساندر</span>
                                <span>${item.time} ${item.date}</span>
                              </div>
                            </div>
                            <div class="user-text">
                              <p>${item.text}</p>
                            </div>
                            <div class="user-comment-down">
                              <div class="delete-comment">
                                <button class="delete-comment-btn" data-keyid="${
                                  item.id
                                }"></button>
                              </div>
                              <div class="like-comment">
                                <span>امتیاز شما به این نظر:</span>
                                <div class="stars-like">
                                <div class="c-like-stars">
                                  <input type="radio" name="like-c" id="like-c-1">
                                  <label for="like-c-1"></label>
                                  <input type="radio" name="like-c" id="like-c-2">
                                  <label for="like-c-2"></label>
                                  <input type="radio" name="like-c" id="like-c-3">
                                  <label for="like-c-3"></label>
                                  <input type="radio" name="like-c" id="like-c-4">
                                  <label for="like-c-4"></label>
                                  <input type="radio" name="like-c" id="like-c-5">
                                  <label for="like-c-5"></label>
                                </div>
                                <div class="like-comment">
                                  <div class="like-hand-area"><a href="#" class="like-hand">12</a></div>
                                  <div class="dislike-hand-area"><a href="#" class="dislike-hand">3</a></div>
                                  
                                </div>
                                </div>
                              </div>
                              <div class="user-rate">
                          <div class="c-rate-box">
                          <div class="rate-box-main rate-box-main-c">
                            <div class="mizan-box">
                              <span class="mizan-lbl">بسته بندی</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  item.package * 20
                                }%"
                                  ><span class="mizan-num">${
                                    item.package
                                  }</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">کیفیت</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  item.quality * 20
                                }%"
                                  ><span>${item.quality}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">رضایت</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  item.satisfaction * 20
                                }%"
                                  ><span>${item.satisfaction}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">کافئین</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  item.caffeine * 20
                                }%"
                                  ><span>${item.caffeine}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                              <span class="mizan-lbl">ترشی</span>
                              <div class="mizan mizan-c">
                                <span class="mizan-in" style="width: ${
                                  item.pickle * 20
                                }%"
                                  ><span>${item.pickle}</span>
                                </span>
                              </div>
                            </div>
                            <div class="mizan-box">
                          <span class="mizan-lbl">عطرو بو</span>
                          <div class="mizan mizan-c">
                            <span class="mizan-in" style="width: ${
                              item.perfume * 20
                            }%"
                              ><span>${item.perfume}</span>
                            </span>
                          </div>
                            </div>
                          </div>
                          </div>
                              </div>
                            </div>
                          </div>
                        </div>
      `;
      commentsContainer.prepend(createDiv);
    });
    deleteComment();
  };
};

const deleteComment = () => {
  const deleteBtn = document.querySelectorAll(".delete-comment-btn");
  deleteBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let dataTask = e.target.getAttribute("data-keyid");
      const commentsStore = db.transaction("comments", "readwrite");
      let request = commentsStore.objectStore("comments").delete(dataTask);
      commentsStore.oncomplete = function () {
        e.target.parentNode.parentNode.parentNode.parentNode.remove();
      };
    });
  });
};
