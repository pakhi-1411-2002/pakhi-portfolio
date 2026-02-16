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
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Pipeline",
    shortDescription: "Built an end-to-end ML pipeline predicting customer churn with 92% accuracy, reducing attrition by 18%.",
    problem: "A subscription-based SaaS company was losing 25% of its customer base annually without clear visibility into which customers were at risk of leaving. The business needed a proactive approach to retention.",
    dataset: "12 months of customer interaction data (~50K records) including usage metrics, support tickets, billing history, and demographic features sourced from internal CRM and analytics platforms.",
    approach: "Engineered 40+ features from raw interaction logs. Compared Logistic Regression, Random Forest, and XGBoost models using stratified k-fold cross-validation. Applied SMOTE for class imbalance. Selected XGBoost based on F1-score and deployed via Flask API.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Flask", "Docker"],
    methods: ["Feature Engineering", "SMOTE", "Cross-Validation", "Hyperparameter Tuning", "Model Interpretability (SHAP)"],
    tradeoffs: "Chose XGBoost over deep learning for interpretability. Accepted slightly lower recall to maintain precision above 0.90, reducing false alerts to the retention team.",
    results: "Achieved 92% accuracy and 0.89 F1-score. The model identified 78% of churning customers 30 days in advance, enabling targeted interventions that reduced churn by 18%.",
    improvements: "Incorporate real-time streaming data for dynamic predictions. Explore graph-based features from customer interaction networks. A/B test retention strategies driven by model outputs.",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "nlp-sentiment-analysis",
    title: "Multi-Language Sentiment Analysis Engine",
    shortDescription: "Developed a transformer-based sentiment classifier handling 5 languages with 87% macro F1-score.",
    problem: "A global e-commerce platform needed to understand customer sentiment across reviews in English, Spanish, French, German, and Portuguese to improve product recommendations and customer service routing.",
    dataset: "1.2M product reviews across 5 languages collected via API scraping and internal databases, labeled into positive, neutral, and negative categories.",
    approach: "Fine-tuned multilingual BERT (mBERT) with language-specific preprocessing pipelines. Implemented custom tokenization strategies per language. Used mixed-precision training for efficiency.",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "FastAPI", "AWS SageMaker"],
    methods: ["Transfer Learning", "Fine-tuning", "Mixed-Precision Training", "Language-specific Preprocessing", "Attention Analysis"],
    tradeoffs: "mBERT was chosen over training separate per-language models for maintenance simplicity. This trades some per-language accuracy for operational efficiency and a unified deployment pipeline.",
    results: "Achieved 87% macro F1-score across all languages. Processing speed of 500 reviews/second. Reduced manual review categorisation workload by 60%.",
    improvements: "Add support for low-resource languages using few-shot learning. Implement aspect-based sentiment analysis. Explore knowledge distillation for edge deployment.",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "real-time-anomaly-detection",
    title: "Real-Time Anomaly Detection System",
    shortDescription: "Designed a streaming anomaly detection system processing 10K events/second with sub-second latency.",
    problem: "A fintech company needed to detect fraudulent transactions in real-time across millions of daily transactions. Existing batch-based systems had a 4-hour detection delay, causing significant financial losses.",
    dataset: "Streaming transaction data (~10M daily events) with features including amount, merchant category, geolocation, device fingerprint, and temporal patterns.",
    approach: "Implemented an ensemble of Isolation Forest and Autoencoder models operating on Apache Kafka streams. Used sliding window feature aggregation and dynamic thresholding based on time-of-day patterns.",
    technologies: ["Python", "Apache Kafka", "Apache Flink", "TensorFlow", "Redis", "PostgreSQL"],
    methods: ["Isolation Forest", "Autoencoders", "Sliding Window Aggregation", "Dynamic Thresholding", "Online Learning"],
    tradeoffs: "Optimised for low latency over maximum accuracy. Accepted a 3% false positive rate to maintain sub-second detection, with a human review queue for borderline cases.",
    results: "Reduced detection time from 4 hours to under 800ms. Caught 94% of fraudulent transactions in real-time. Estimated savings of £2.1M annually in fraud prevention.",
    improvements: "Implement federated learning across institutional boundaries. Add graph neural networks for relationship-based fraud patterns. Reduce false positive rate through reinforcement learning feedback loops.",
    github: "https://github.com",
  },
  {
    id: "supply-chain-optimisation",
    title: "Supply Chain Demand Forecasting",
    shortDescription: "Created a demand forecasting model reducing inventory costs by 23% while maintaining 98% service levels.",
    problem: "A retail chain with 200+ stores struggled with inventory management — overstocking perishable goods while frequently running out of high-demand items, leading to waste and lost revenue.",
    dataset: "3 years of daily sales data (~15M records) across 5,000 SKUs, enriched with weather data, promotional calendars, and economic indicators.",
    approach: "Developed a hierarchical forecasting approach combining LightGBM for short-term predictions with Prophet for seasonal decomposition. Implemented reconciliation across store-product hierarchies.",
    technologies: ["Python", "LightGBM", "Prophet", "Airflow", "BigQuery", "Looker"],
    methods: ["Hierarchical Forecasting", "Time Series Decomposition", "Feature Engineering", "Ensemble Methods", "Forecast Reconciliation"],
    tradeoffs: "Chose interpretable models over deep learning time series approaches (N-BEATS, TFT) to enable supply chain managers to understand and trust the forecasts. This slightly reduced peak accuracy but significantly improved adoption.",
    results: "Reduced inventory holding costs by 23%. Improved demand forecast accuracy (MAPE) from 32% to 14%. Maintained 98% service level while reducing waste by 31%.",
    improvements: "Integrate causal inference for promotional impact. Add computer vision for shelf-level inventory monitoring. Explore reinforcement learning for dynamic reorder policies.",
    github: "https://github.com",
  },
  {
    id: "healthcare-dashboard",
    title: "Interactive Healthcare Analytics Dashboard",
    shortDescription: "Built a full-stack analytics dashboard visualising patient outcomes across 50+ hospitals in real-time.",
    problem: "A healthcare network needed centralised visibility into patient outcomes, readmission rates, and resource utilisation across 50+ hospitals to drive evidence-based operational decisions.",
    dataset: "Anonymised patient records (~2M entries), operational metrics, and staffing data aggregated from hospital information systems via HL7 FHIR APIs.",
    approach: "Designed a data pipeline using dbt for transformation and a React dashboard with D3.js visualisations. Implemented role-based access control and HIPAA-compliant data handling throughout.",
    technologies: ["React", "TypeScript", "D3.js", "Python", "dbt", "Snowflake", "FastAPI"],
    methods: ["ETL Pipeline Design", "Data Modelling", "Interactive Visualisation", "Statistical Process Control", "RBAC Implementation"],
    tradeoffs: "Chose Snowflake over real-time databases for cost efficiency at scale. Dashboard refreshes every 15 minutes rather than in real-time, which was acceptable for strategic decision-making use cases.",
    results: "Enabled executives to identify underperforming units within minutes. Dashboard is used daily by 200+ staff. Contributed to a 12% reduction in 30-day readmission rates through early intervention insights.",
    improvements: "Add predictive analytics for resource allocation. Implement natural language querying for non-technical users. Build mobile-optimised views for clinicians on rounds.",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "recommendation-engine",
    title: "Hybrid Recommendation Engine",
    shortDescription: "Engineered a hybrid recommender combining collaborative filtering and content-based methods, boosting engagement by 34%.",
    problem: "An online learning platform with 100K+ users and 5K courses struggled with content discovery. Users completed only 1.2 courses on average, and 40% churned within the first month due to poor recommendations.",
    dataset: "User interaction logs (~8M events), course metadata, completion rates, ratings, and user demographic profiles.",
    approach: "Built a hybrid system combining matrix factorisation (ALS) for collaborative filtering with TF-IDF content similarity. Used a learned blending layer to combine scores based on user interaction history depth.",
    technologies: ["Python", "PySpark", "TensorFlow", "Redis", "PostgreSQL", "Docker"],
    methods: ["Collaborative Filtering (ALS)", "Content-Based Filtering", "Hybrid Blending", "A/B Testing", "Cold Start Handling"],
    tradeoffs: "Prioritised recommendation diversity over pure accuracy to avoid filter bubbles. Implemented exploration-exploitation trade-off using Thompson Sampling for new users with limited interaction history.",
    results: "Increased average courses completed from 1.2 to 2.8. Boosted user engagement by 34% and reduced first-month churn by 22%. Recommendation click-through rate improved from 8% to 19%.",
    improvements: "Implement sequential recommendation using transformers. Add explainability layer showing why each course was recommended. Explore multi-stakeholder recommendations balancing learner and instructor goals.",
    github: "https://github.com",
  },
];
