export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  dataset: string;
  approach: string;
  technologies: string[];
  methods: string[];
  tradeoffs: string;
  results: string;
  improvements: string;
  github: string;
  demo?: string;
  images?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "loan-approval-explainer",
    title: "Loan Approval Explainer",
    shortDescription:
      "A small Streamlit app that predicts loan approval and explains each decision using SHAP, with clear visuals and plain-language reasoning.",
    problem:
      "Loan decisions can feel like a black box. This project demonstrates how a simple classifier can produce an approve or reject prediction and show which inputs pushed the model toward that outcome.",
    dataset:
      "A tabular loan-application dataset (for example, a public loan approval dataset) containing common applicant fields such as income, requested loan amount, credit history proxy, employment length, and basic demographic categories. Training uses historical rows with a label indicating approval or rejection.",
    approach:
      "1) Collect applicant inputs in a structured form (for example income, loan amount, credit history proxy, employment length, debt-to-income proxy, dependents, and optional categoricals like education or marital status).\n\n2) Preprocess inputs the same way as training, including one-hot encoding for categoricals and scaling if needed, while enforcing the exact feature order expected by the model.\n\n3) Run a trained classifier to output a binary decision (Approve or Reject) and a probability score such as P(approve)=0.73.\n\n4) Generate a per-applicant explanation with SHAP, showing how each feature contributed toward approval or rejection.\n\n5) Display a visual explanation panel, including a local waterfall-style view for the specific applicant and a global feature-importance view based on mean absolute SHAP values.\n\n6) Produce a plain-language explanation based on the top SHAP factors, using simple templates (optionally LLM-assisted if implemented).\n\n7) Optional, provide lightweight what-if suggestions derived from SHAP direction and magnitude. This is heuristic guidance, not a guaranteed intervention.",
    technologies: ["Python", "pandas", "NumPy", "scikit-learn", "SHAP", "Streamlit", "matplotlib/plotly"],
    methods: ["Preprocessing Pipelines", "Classification", "Probability Scoring", "Local Explainability (SHAP)", "Global Explainability", "Human-readable Summaries"],
    tradeoffs:
      "This is a demo of interpretability, not a bank underwriting system. It does not verify identity, pull bank data, detect fraud, enforce legal compliance, or prove causality. SHAP explains the model’s behaviour, not real-world cause and effect.",
    results:
      "The app returns a decision, a model score, and a clear explanation of what drove that prediction. It is designed to be shareable, with a clean decision panel and SHAP charts that make the reasoning easy to communicate.",
    improvements:
      "Add probability calibration, add basic fairness checks, improve input validation, and expand what-if analysis with safer constraint-aware scenarios. If used with real data, include governance, monitoring, and human review.",
    github: "https://github.com/pakhi-1411-2002",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    featured: true,
  },

  /*
  Other projects are temporarily hidden. Re-enable when you want more tiles on the Projects page.

  {
    id: "alternative-data-intelligence",
    title: "Alternative Data Intelligence, Computer Vision & Embeddings",
    shortDescription: "Built an embeddings pipeline over 80k+ images for clustering and similarity search.",
    problem: "...",
    dataset: "...",
    approach: "...",
    technologies: ["Python"],
    methods: ["Embeddings"],
    tradeoffs: "...",
    results: "...",
    improvements: "...",
    github: "https://github.com/pakhi-1411-2002",
  },
  */
];
