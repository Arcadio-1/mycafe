const answerBtn = document.querySelectorAll(".add-answer-btn");
const answerBox = document.querySelector(".submit-answer");
const answerBoxContainer = document.querySelector(".submit-answer-container");
export const openAnswerBox = () => {
  answerBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      const answerBoxContainerSize =
        e.currentTarget.nextElementSibling.getBoundingClientRect().height;
      if (answerBoxContainerSize == 0) {
        const answerBoxSize = answerBox.getBoundingClientRect().height;
        e.currentTarget.nextElementSibling.style.height = `${
          answerBoxSize + 30
        }px`;
        console.log(answerBoxSize);
        return;
      }
      e.currentTarget.nextElementSibling.style.height = `0px`;
    });
  });
};
