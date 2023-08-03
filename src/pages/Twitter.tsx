import { Helmet } from "react-helmet";

export default function Twitter() {
  return (
    <div className="max-w-screen-md mx-auto rounded-md text-sm leading-4 text-gray-700 p-4 space-y-8">
      <Helmet>
        <title>Thoughts on my time at Twitter</title>
      </Helmet>
      <div className="space-y-1">
        <h1>Thoughts on my time at Twitter!</h1>
        <p className="font-light text-gray-500">November 22, 2022</p>
      </div>
      <div className="leading-5 space-y-4">
        <div>
          I was notified a few weeks ago that November 4th was my last working
          day at Twitter, ending my time there as a Software Engineer II.
        </div>
        <div>
          For over a year, I was fortunate to work under the Ads Callback team.
          We designed and developed distributed stream-processing pipelines and
          services for high volumes of real-time ad impressions. This required
          us to interface with ads serving, prediction models, revenue
          analytics, and billing.
        </div>
        <div>
          Working at a large tech company right out of college taught me how to
          deal with problems at scale. As much as I enjoy working on personal
          projects, they never reach the point of handling millions of users
          that generate large amounts of traffic. It was awesome to be involved
          in decision-making for our backend systems that considered even the
          smallest details to handle this scale. I've felt myself grow as an
          engineer, and I owe it to my team and mentors at the company.
        </div>
        <div>
          Twitter had thoughtful employees that I'm lucky to call my friends. I
          would say that seeing them every day is what I miss most, but that
          can't be true because I still interact with them almost every day. You
          can take the person out of the place but not the place out of the
          person? Or something like that.
        </div>
      </div>
    </div>
  );
}
