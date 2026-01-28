(function(){
  function $(id){ return document.getElementById(id); }

  function addRow(tbody, cells){
    const tr = document.createElement("tr");
    cells.forEach(function(text){
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
    tbody.prepend(tr);
  }

  function initWodManager(){
    const form = $("wodForm");
    const tbody = $("wodTableBody");
    if(!form || !tbody) return;

    form.addEventListener("submit", function(e){
      e.preventDefault();
      const day = $("wodDay").value;
      const time = $("wodTime").value;
      const title = $("wodTitle").value;
      const focus = $("wodFocus").value;
      if(!day || !time || !title) return;

      addRow(tbody, [day, time, title, focus || "—", "Draft"]);
      form.reset();
    });
  }

  function initAttendance(){
    const form = $("attendanceForm");
    const tbody = $("attendanceTableBody");
    if(!form || !tbody) return;

    form.addEventListener("submit", function(e){
      e.preventDefault();
      const name = $("attName").value;
      const date = $("attDate").value;
      const className = $("attClass").value;
      const status = $("attStatus").value;
      if(!name || !date || !className) return;

      addRow(tbody, [name, date, className, status]);
      form.reset();
    });
  }

  function initPRs(){
    const form = $("prForm");
    const tbody = $("prTableBody");
    if(!form || !tbody) return;

    form.addEventListener("submit", function(e){
      e.preventDefault();
      const lift = $("prLift").value;
      const value = $("prValue").value;
      const unit = $("prUnit").value;
      const date = $("prDate").value;
      if(!lift || !value) return;

      addRow(tbody, [lift, value + " " + unit, date || "—", "Pending"]);
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    initWodManager();
    initAttendance();
    initPRs();
  });
})();
