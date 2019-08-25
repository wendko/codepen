function replay(id) {
    const timeline = document.getElementById(id);
    const originalDisplay = timeline.style.display;
    timeline.style.display = "none";
    setTimeout(() => timeline.style.display = originalDisplay, 0);
}

const allElementIds = ["scenarioEndBody", "scenarioMiddleBody", "scenarioAsync", "scenarioDefer"];

function replayAll() {
    allElementIds.forEach(replay);
}