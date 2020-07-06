import React from "react";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import ClientsSection from "components/ClientsSection";
import TestimonialsSection from "components/TestimonialsSection";
import NewsletterSection from "components/NewsletterSection";
import ContentCardsSection from "components/ContentCardsSection";
import CtaSection from "components/CtaSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="primary"
        textColor="light"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Start Free Trial"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      ></HeroSection>
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      ></FeaturesSection>
      <ClientsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      ></ClientsSection>
      <TestimonialsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      ></TestimonialsSection>
      <NewsletterSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      ></NewsletterSection>
      <ContentCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Content"
        subtitle=""
      ></ContentCardsSection>
      <CtaSection
        bg="primary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      ></CtaSection>
    </>
  );
}

export default IndexPage;
