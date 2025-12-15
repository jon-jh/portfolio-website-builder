"use client";
import { useEffect, useState } from "react";
import LoadingBar from "../components/LoadingBar";
import Card from "../components/Card";
import styles from "../styles/WordpressPage.module.scss";
import SpinBlock from "../components/SpinBlock";

export default function WordpressPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadPosts() {
    setLoading(true);
    try {
      const res = await fetch(
        "https://public-api.wordpress.com/rest/v1.1/sites/stylepress4.wordpress.com/posts/"
      );
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <section data-bg="wordpress-bg">
      <main>
        <h1>
          This content is pulled from a WordPress endpoint.{" "}
          <span className="inline-spin">
            <SpinBlock />
          </span>
        </h1>

        {loading}

        {/* LoadingBar handles countdown + refresh */}
        <LoadingBar interval={60} onRefresh={loadPosts} />

        {posts.length === 0 && !loading ? (
          <p>No posts found.</p>
        ) : (
          <div className={styles.posts}>
            {posts.map((post) => (
              <Card key={post.ID}>
                <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </Card>
            ))}
          </div>
        )}
      </main>
    </section>
  );
}
