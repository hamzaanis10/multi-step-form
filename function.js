const DOMstrings = {
  stepsBtnClass: "multisteps-form__progress-btn",
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector(".multisteps-form__progress"),
  stepsForm: document.querySelector(".multisteps-form__form"),
  stepsFormTextareas: document.querySelectorAll(".multisteps-form__textarea"),
  stepFormPanelClass: "multisteps-form__panel",
  stepFormPanels: document.querySelectorAll(".multisteps-form__panel"),
  stepPrevBtnClass: "js-btn-prev",
  stepNextBtnClass: "js-btn-next",
};

const removeClasses = (elemSet, className) => {
  elemSet.forEach((elem) => {
    elem.classList.remove(className);
  });
};

const findParent = (elem, parentClass) => {
  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;
};

const getActiveStep = (elem) => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

const setActiveStep = (activeStepNum) => {
  removeClasses(DOMstrings.stepsBtns, "js-active");

  DOMstrings.stepsBtns.forEach((elem, index) => {
    if (index <= activeStepNum) {
      elem.classList.add("js-active");
    }
  });
};

const getActivePanel = () => {
  let activePanel;

  DOMstrings.stepFormPanels.forEach((elem) => {
    if (elem.classList.contains("js-active")) {
      activePanel = elem;
    }
  });

  return activePanel;
};

const setActivePanel = (activePanelNum) => {
  removeClasses(DOMstrings.stepFormPanels, "js-active");

  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {
      elem.classList.add("js-active");

      setFormHeight(elem);
    }
  });
};

const formHeight = (activePanel) => {
  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

DOMstrings.stepsBar.addEventListener("click", (e) => {
  const eventTarget = e.target;

  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }

  const activeStep = getActiveStep(eventTarget);

  setActiveStep(activeStep);

  setActivePanel(activeStep);
});

DOMstrings.stepsForm.addEventListener("click", (e) => {
  const eventTarget = e.target;

  if (
    !(
      eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ||
      eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)
    )
  ) {
    return;
  }

  const activePanel = findParent(
    eventTarget,
    `${DOMstrings.stepFormPanelClass}`
  );

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(
    activePanel
  );

  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;
  } else {
    activePanelNum++;
  }

  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
});

window.addEventListener("load", setFormHeight, false);

window.addEventListener("resize", setFormHeight, false);

var room = 1;

const education_fields = () => {
  room++;
  var objTo = document.getElementById("education_fields");
  var divtest = document.createElement("div");

  divtest.setAttribute("class", "form-group removeclass" + room);
  var rdiv = "removeclass" + room;

  divtest.innerHTML = `
      <div class='row'>
        <div class="col-sm-3 nopadding">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="degree"
              name="degree[]"
              value=""
              placeholder="Degree/Diploma"
          />
          </div>
        </div>

        <div class="col-sm-3 nopadding">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="subject"
              name="subject[]"
              value=""
              placeholder="Subject"
          />
          </div>
        </div>

         <div class="col-sm-3 nopadding">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="institution"
              name="institution[]"
              value=""
              placeholder="Institution"
          />
          </div>
        </div>

        <div class="col-sm-3 nopadding">
          <div class="form-group">
            <div class="input-group">
              <input
                class="form-control"
                id="year"
                name="year[]"
                placeholder="year"
              />
              <div class="input-group-btn">
                <button
                  class="btn btn-danger"
                  type="button"
                  onclick="remove_education_fields(${room});"
                >
                <i
                  class="fa fa-minus"
                  aria-hidden="true"
                ></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="clear"></div>
      </div>
  `;

  objTo.appendChild(divtest);
};

const training_fields_pak = () => {
  room++;
  var objTo = document.getElementById("training_fields_pak");
  var divtest = document.createElement("div");

  divtest.setAttribute("class", "form-group removeclass" + room);
  var rdiv = "removeclass" + room;

  divtest.innerHTML = `
      <div class='row'>
        <div class="col-sm-4 nopadding">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="course_name"
              name="course_name[]"
              value=""
              placeholder="Name of course"
          />
          </div>
        </div>

        <div class="col-sm-2 nopadding">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="from"
              name="from[]"
              value=""
              placeholder="From"
          />
          </div>
        </div>

         <div class="col-sm-2 nopadding">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="to"
              name="to[]"
              value=""
              placeholder="To"
          />
          </div>
        </div>

        <div class="col-sm-4 nopadding">
          <div class="form-group">
            <div class="input-group">
              <input
                class="form-control"
                id="institution"
                name="institution[]"
                placeholder="Name of institution"
              />
              <div class="input-group-btn">
                <button
                  class="btn btn-danger"
                  type="button"
                  onclick="remove_education_fields(${room});"
                >
                <i
                  class="fa fa-minus"
                  aria-hidden="true"
                ></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="clear"></div>
      </div>
  `;

  objTo.appendChild(divtest);
};

function remove_education_fields(rid) {
  $(".removeclass" + rid).remove();
}
