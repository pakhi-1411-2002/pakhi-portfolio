import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    slug: "feature-engineering-matters",
    title: "Why Feature Engineering Still Matters in the Age of Deep Learning",
    excerpt:
      "Deep learning can learn features automatically, but thoughtful feature engineering often outperforms it on tabular data. Here's when and why I still invest heavily in feature design.",
    date: "2025-12-01",
    tags: ["Machine Learning", "Feature Engineering"],
  },
  {
    slug: "lessons-from-failed-models",
    title: "3 Lessons from Models That Failed in Production",
    excerpt:
      "Not every model that performs well in a notebook survives deployment. I share three real cases where production exposed gaps in my offline evaluation approach.",
    date: "2025-10-15",
    tags: ["MLOps", "Lessons Learned"],
  },
  {
    slug: "choosing-the-right-metric",
    title: "Choosing the Right Metric: A Practical Framework",
    excerpt:
      "Accuracy, F1, AUC — the choice of metric shapes every downstream decision. This post walks through a framework for selecting metrics aligned with business goals.",
    date: "2025-09-01",
    tags: ["Data Science", "Evaluation"],
  },
];

const Blog = () => (
  <div className="pt-24 section-padding">
    <div className="container mx-auto max-w-3xl">
      <SectionHeading
        title="Blog"
        subtitle="Occasional notes on data science practice, trade-offs, and lessons learned."
      />

      <div className="space-y-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 group"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground text-center">
        More posts coming soon — quality over quantity.
      </p>
    </div>
  </div>
);

export default Blog;
