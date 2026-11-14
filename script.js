// Sindh Govt Job Eligibility Checker
// Sample post data checked November 2026. Always verify on the official advertisement
// before applying. This is a demo checker, not an official government website.

"use strict";

// Qualification info: rank is used for "Intermediate or above" checks.
// graduate = true only for a COMPLETED degree that counts as graduation.
// A final-year BSCS does not count as graduation yet.
var QUALIFICATIONS = {
  matric:      { rank: 0, graduate: false, label: "Matric" },
  intermediate:{ rank: 1, graduate: false, label: "Intermediate" },
  ads:         { rank: 2, graduate: true,  label: "ADS — 14-year graduation" },
  "bscs-final":{ rank: 1, graduate: false, label: "BSCS — final year (not yet completed)" },
  bscs:        { rank: 3, graduate: true,  label: "BSCS — completed (16-year)" },
  masters:     { rank: 4, graduate: true,  label: "Masters (16-year+)" }
};

var POSTS = [
  {
    id: "junior-clerk",
    title: "Junior Clerk BPS-11",
    org: "Ghotki District Court (via STS)",
    requirements: [
      "Intermediate or above",
      "Ghotki domicile",
      "Age 18–28 years",
      "MS Office certificate + 40 WPM typing"
    ],
    lastDate: "25 Nov 2026",
    fee: "Rs 2,000 (challan)",
    check: function (p) {
      if (p.domicile !== "Ghotki") {
        return { eligible: false, reason: "Domicile must be Ghotki — yours is " + p.domicile + "." };
      }
      if (p.qual.rank < 1) {
        return { eligible: false, reason: "Needs Intermediate or above — yours is " + p.qual.label + "." };
      }
      if (p.age < 18 || p.age > 28) {
        return { eligible: false, reason: "Age must be 18–28 years — yours is " + p.age + "." };
      }
      var missing = missingCertificates(p);
      if (missing) {
        return { eligible: false, reason: "Missing " + missing + "." };
      }
      return { eligible: true, reason: "You meet the domicile, qualification, age and certificate requirements." };
    }
  },
  {
    id: "clerk-of-court",
    title: "Clerk of the Court BPS-11",
    org: "Ghotki District Court (via STS)",
    requirements: [
      "Intermediate or above",
      "Ghotki domicile",
      "Age 18–28 years",
      "MS Office certificate + 40 WPM typing"
    ],
    lastDate: "25 Nov 2026",
    fee: "Rs 2,000 (challan)",
    check: function (p) {
      if (p.domicile !== "Ghotki") {
        return { eligible: false, reason: "Domicile must be Ghotki — yours is " + p.domicile + "." };
      }
      if (p.qual.rank < 1) {
        return { eligible: false, reason: "Needs Intermediate or above — yours is " + p.qual.label + "." };
      }
      if (p.age < 18 || p.age > 28) {
        return { eligible: false, reason: "Age must be 18–28 years — yours is " + p.age + "." };
      }
      var missing = missingCertificates(p);
      if (missing) {
        return { eligible: false, reason: "Missing " + missing + "." };
      }
      return { eligible: true, reason: "You meet the domicile, qualification, age and certificate requirements." };
    }
  },
  {
    id: "english-clerk",
    title: "English Clerk BPS-11",
    org: "Ghotki District Court (via STS)",
    requirements: [
      "Intermediate or above",
      "Ghotki domicile",
      "Age 18–28 years",
      "MS Office certificate + 40 WPM typing"
    ],
    lastDate: "25 Nov 2026",
    fee: "Rs 2,000 (challan)",
    check: function (p) {
      if (p.domicile !== "Ghotki") {
        return { eligible: false, reason: "Domicile must be Ghotki — yours is " + p.domicile + "." };
      }
      if (p.qual.rank < 1) {
        return { eligible: false, reason: "Needs Intermediate or above — yours is " + p.qual.label + "." };
      }
      if (p.age < 18 || p.age > 28) {
        return { eligible: false, reason: "Age must be 18–28 years — yours is " + p.age + "." };
      }
      var missing = missingCertificates(p);
      if (missing) {
        return { eligible: false, reason: "Missing " + missing + "." };
      }
      return { eligible: true, reason: "You meet the domicile, qualification, age and certificate requirements." };
    }
  },
  {
    id: "assistant-record-keeper",
    title: "Assistant Record Keeper BPS-11",
    org: "Ghotki District Court (via STS)",
    requirements: [
      "Intermediate or above",
      "Ghotki domicile",
      "Age 21–25 years",
      "MS Office certificate + 40 WPM typing"
    ],
    lastDate: "25 Nov 2026",
    fee: "Rs 2,000 (challan)",
    check: function (p) {
      if (p.domicile !== "Ghotki") {
        return { eligible: false, reason: "Domicile must be Ghotki — yours is " + p.domicile + "." };
      }
      if (p.qual.rank < 1) {
        return { eligible: false, reason: "Needs Intermediate or above — yours is " + p.qual.label + "." };
      }
      if (p.age < 21 || p.age > 25) {
        return { eligible: false, reason: "Age must be 21–25 years — yours is " + p.age + "." };
      }
      var missing = missingCertificates(p);
      if (missing) {
        return { eligible: false, reason: "Missing " + missing + "." };
      }
      return { eligible: true, reason: "You meet the domicile, qualification, age and certificate requirements." };
    }
  },
  {
    id: "spsc-assistant",
    title: "Assistant BS-16 (Sr 8, 23, 33) — SPSC Ad 07/2026",
    org: "Sindh Public Service Commission (SPSC)",
    requirements: [
      "Graduation — ADS (14-year) counts",
      "Sindh domicile (any Sindh district)",
      "No MS Office certificate required for these posts"
    ],
    lastDate: "14 Dec 2026",
    fee: "Rs 500 per post",
    check: function (p) {
      if (!p.qual.graduate) {
        return { eligible: false, reason: "Needs a completed graduation — " + p.qual.label + " does not count as graduation yet." };
      }
      if (!p.domicile) {
        return { eligible: false, reason: "Needs a Sindh domicile." };
      }
      return { eligible: true, reason: "You meet the graduation and Sindh domicile requirements." };
    }
  },
  {
    id: "hbl-cash-officer",
    title: "Cash Officer",
    org: "Habib Bank Limited (HBL) — Sukkur region",
    requirements: [
      "Graduation — ADS (14-year) counts",
      "No experience required",
      "Sukkur region posting",
      "No application fee"
    ],
    lastDate: "15 Nov 2026",
    fee: "No fee",
    check: function (p) {
      if (!p.qual.graduate) {
        return { eligible: false, reason: "Needs a completed graduation — " + p.qual.label + " does not count as graduation yet." };
      }
      return { eligible: true, reason: "You meet the graduation requirement. No experience or fee needed — Sukkur region posting." };
    }
  }
];

function missingCertificates(p) {
  var missing = [];
  if (!p.msOffice) { missing.push("MS Office certificate"); }
  if (!p.typing) { missing.push("40 WPM typing"); }
  if (missing.length === 0) { return null; }
  return missing.join(" and ");
}

function readProfile() {
  var domicile = document.getElementById("domicile").value;
  var qualKey = document.getElementById("qualification").value;
  var age = parseInt(document.getElementById("age").value, 10);
  return {
    domicile: domicile,
    qual: QUALIFICATIONS[qualKey],
    qualKey: qualKey,
    age: isNaN(age) ? 0 : age,
    msOffice: document.getElementById("ms-office").checked,
    typing: document.getElementById("typing").checked
  };
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderResults(profile) {
  var list = document.getElementById("results-list");
  var summary = document.getElementById("summary");
  var eligibleCount = 0;
  var html = "";

  POSTS.forEach(function (post) {
    var result = post.check(profile);
    if (result.eligible) { eligibleCount += 1; }
    var cardClass = result.eligible ? "eligible" : "not-eligible";
    var badgeClass = result.eligible ? "eligible" : "not-eligible";
    var badgeText = result.eligible ? "Eligible" : "Not eligible";

    html += '<article class="job-card ' + cardClass + '">';
    html += "<h3>" + escapeHtml(post.title) + "</h3>";
    html += '<p class="org">' + escapeHtml(post.org) + "</p>";
    html += '<span class="badge ' + badgeClass + '">' + badgeText + "</span>";
    html += '<p class="reason"><strong>' + (result.eligible ? "Why you pass: " : "Reason: ") + "</strong>"
      + escapeHtml(result.reason) + "</p>";
    html += "<ul>";
    post.requirements.forEach(function (req) {
      html += "<li>" + escapeHtml(req) + "</li>";
    });
    html += "<li>Last date: " + escapeHtml(post.lastDate) + "</li>";
    html += "<li>Fee: " + escapeHtml(post.fee) + "</li>";
    html += "</ul></article>";
  });

  list.innerHTML = html;
  summary.textContent = "You are eligible for " + eligibleCount + " of " + POSTS.length
    + " posts (domicile " + (profile.domicile || "—") + ", " + profile.qual.label
    + ", age " + profile.age + ").";
}

function resetDemo() {
  document.getElementById("domicile").value = "Ghotki";
  document.getElementById("qualification").value = "ads";
  document.getElementById("age").value = "24";
  document.getElementById("ms-office").checked = false;
  document.getElementById("typing").checked = false;
  document.getElementById("results-list").innerHTML = "";
  document.getElementById("summary").textContent =
    "Demo example loaded — press “Check Eligibility” to see your results for all 6 posts.";
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("checker-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var profile = readProfile();
    if (!profile.domicile) {
      alert("Please select your domicile district.");
      return;
    }
    if (!profile.age || profile.age < 15 || profile.age > 60) {
      alert("Please enter a valid age between 15 and 60.");
      return;
    }
    renderResults(profile);
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("reset-demo").addEventListener("click", resetDemo);
});
