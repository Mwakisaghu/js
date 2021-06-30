class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectSwitchButton();
  }
  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = document.querySelector('button: last-of-type');
    switchBtn.addEventListener('click');
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }
  addProject() {}
  switchProject() {
    //const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    //this.projects.splice(projectIndex, 1);
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');
  }
}

App.init();
