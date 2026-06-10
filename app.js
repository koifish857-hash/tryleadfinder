const leadData = {
  dentists: [
    {
      company: "Oakline Family Dental",
      signal: "Website has no online booking CTA and mobile page speed is weak.",
      angle: "Offer a one-page conversion audit focused on missed appointment requests.",
      tags: ["No booking CTA", "Slow mobile", "High-value service"],
      score: 91,
    },
    {
      company: "Cedar Park Smile Studio",
      signal: "Recent reviews mention scheduling friction and the contact form is buried.",
      angle: "Lead with a patient intake flow fix that reduces phone back-and-forth.",
      tags: ["Review signal", "Form friction", "Local SEO"],
      score: 86,
    },
    {
      company: "Bright Ridge Orthodontics",
      signal: "Paid search is active, but landing page has generic copy and no proof block.",
      angle: "Pitch a landing page refresh tied to ad spend efficiency.",
      tags: ["Running ads", "Weak proof", "Landing page"],
      score: 82,
    },
  ],
  gyms: [
    {
      company: "North Loop Fitness",
      signal: "Google rating trails nearby competitors and owner replies stopped two months ago.",
      angle: "Open with a simple review recovery campaign for trial membership growth.",
      tags: ["Review gap", "Dormant replies", "Local intent"],
      score: 88,
    },
    {
      company: "Forge Strength Club",
      signal: "Instagram is active, but website has no clear first-visit offer.",
      angle: "Suggest a first-class funnel that turns social traffic into booked visits.",
      tags: ["Active social", "No offer", "Booking gap"],
      score: 84,
    },
    {
      company: "Pulse Barre Studio",
      signal: "Class schedule is hard to scan on mobile and trial pricing is unclear.",
      angle: "Pitch a mobile schedule and intro offer cleanup.",
      tags: ["Mobile UX", "Pricing clarity", "Membership"],
      score: 79,
    },
  ],
  shopify: [
    {
      company: "Moss & Thread",
      signal: "Store has no email capture before checkout and no abandoned cart prompt.",
      angle: "Lead with a 7-day retention setup to recover first-time visitors.",
      tags: ["No popup", "No cart flow", "DTC"],
      score: 93,
    },
    {
      company: "Paw Pantry Co.",
      signal: "Reviews are strong, but product pages do not surface bundles or subscriptions.",
      angle: "Pitch a bundle and reorder email sequence for repeat purchase lift.",
      tags: ["Strong reviews", "No bundles", "Subscription fit"],
      score: 87,
    },
    {
      company: "Peak Trail Supply",
      signal: "Blog traffic exists, but product CTAs are inconsistent across guides.",
      angle: "Offer a content-to-product conversion cleanup.",
      tags: ["SEO traffic", "CTA gaps", "Outdoor niche"],
      score: 81,
    },
  ],
};

const nicheLabel = {
  dentists: "Dentists",
  gyms: "Local gyms",
  shopify: "Shopify stores",
};

const leadForm = document.querySelector("#leadForm");
const leadList = document.querySelector("#leadList");
const packTitle = document.querySelector("#packTitle");
const waitlistForm = document.querySelector("#waitlistForm");
const formMessage = document.querySelector("#formMessage");
const exportButton = document.querySelector("#exportButton");
let currentLeads = leadData.dentists;

function renderLeads() {
  const niche = leadForm.niche.value;
  const location = leadForm.location.value.trim() || "your market";
  const leads = leadData[niche];
  currentLeads = leads;

  packTitle.textContent = `${nicheLabel[niche]} in ${location}`;
  leadList.innerHTML = leads
    .map(
      (lead) => `
        <article class="lead-card">
          <div>
            <h3>${lead.company}</h3>
            <p><strong>Signal:</strong> ${lead.signal}</p>
            <p><strong>Outreach angle:</strong> ${lead.angle}</p>
            <div class="lead-meta">
              ${lead.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
          <div class="score">${lead.score}</div>
        </article>
      `
    )
    .join("");
}

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderLeads();
});

waitlistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(waitlistForm).get("email");
  formMessage.textContent = `Thanks. We'll send a sample pack to ${email}.`;
  waitlistForm.reset();
});

exportButton.addEventListener("click", () => {
  const rows = [
    ["Company", "Score", "Signal", "Outreach angle", "Tags"],
    ...currentLeads.map((lead) => [
      lead.company,
      lead.score,
      lead.signal,
      lead.angle,
      lead.tags.join("; "),
    ]),
  ];
  const csv = rows
    .map((row) =>
      row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")
    )
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "leadfinder-sample-pack.csv";
  link.click();
  URL.revokeObjectURL(url);

  exportButton.textContent = "CSV ready";
  window.setTimeout(() => {
    exportButton.textContent = "Export CSV";
  }, 1400);
});

renderLeads();
