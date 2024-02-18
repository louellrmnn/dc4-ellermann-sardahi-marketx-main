const express = require("express");
const path = require("path");

const app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static("front"));

module.exports = app;

const campaigns = [
  {
    id: "1",
    name: "Super Promo",
    description: "Des réductions incroyables sur tous nos produits !",
    startDate: "2023-08-01",
    endDate: "2023-09-31",
    budget: 10000,
  },
  {
    id: "2",
    name: "Solde d'hiver",
    description: "Pensez cadeau de Noel !",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    budget: 5000,
  },
  {
    id: "3",
    name: "Black Friday",
    description: "Le Week-End à ne pas loupé !",
    startDate: "2023-11-24",
    endDate: "2023-11-26",
    budget: 2000,
  },
];

app.get("/api/campaigns", (req, res) => {
  // res.status(200).json(campaigns);
  res.status(200).render(path.join(__dirname, "../front/html/index.html"), {
    campaigns: campaigns,
  });
});

app.get("/api/campaigns/:id", (req, res) => {
  const campaignId = req.params.id;
  const campaign = campaigns.find((campaign) => campaign.id === campaignId);

  if (!campaign) {
    return res.status(404).json({ error: "Campaign not found" });
  }

  // res.status(200).json(campaign);
  res.status(200).render(path.join(__dirname, "../front/html/product.html"), {
    campaign: campaign,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(
    `Le serveur écoute sur le port ${PORT}, prêt à répandre des campagnes !`
  )
);
