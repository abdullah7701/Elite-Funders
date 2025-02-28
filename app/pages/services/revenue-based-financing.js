"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function RevenueBasedFinancing() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Revenue-Based Financing">
        <section className="about-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="about-three__right">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <p className="section-title__tagline">REVENUE-BASED FINANCING</p>
                    </div>
                    <h2 className="section-title__title">
                      Flexible Funding
                      <br /> Based on Your Revenue
                    </h2>
                  </div>
                  <p className="about-three__text">
                    Get quick access to capital with repayments tied to your business revenue—no fixed monthly payments.
                  </p>
                  <div className="about-three__btn-box">
                    <Link href="/apply" className="about-three__btn thm-btn">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}