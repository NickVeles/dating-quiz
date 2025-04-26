import React from "react";
import ReactModal from "react-modal";
import { Close } from "../components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface InfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onRequestClose }) => {
  const myAge =
    new Date().getFullYear() -
    2003 -
    (new Date() < new Date(`${new Date().getFullYear()}-03-21`) ? 1 : 0);

  const core = [
    `🎂 ${myAge}`,
    "♂️ Male",
    "🪪 Polish",
    "📏 190cm/6'3ft",
    "💼 Software Developer",
    "🏋️ Regularly",
    "💪 Average",
  ];

  const languages = ["🇵🇱 Native", "🇺🇸 Fluent", "🇨🇳 (Simplified) Beginner"];

  const preferences = [
    "🙏 Atheist",
    "💘 Straight",
    "💍 Serious Relationship",
    "👫 Monogamy",
    "🍼 Open to having",
    "🚬 Never",
    "🍺 Never",
    "🌿 Never",
  ];

  const personality = [
    "🧮 Analytical",
    "💫 Ambitious",
    "🤯 ASD",
    "😐 Straightforward",
    "🫥 Introverted",
    "🗣️ Talkative",
    "🤣 Absurd/Dry Humor",
    "😍 Clingy",
    "😊 Kind",
    "🪨 Resilient",
    "⚖️ Judgmental",
  ];

  const hobbies = [
    "💻 Programming",
    "🏛️ Philosophy",
    "🤝 Psychology",
    "🦾 Robotics",
    "🤖 AI",
    "🧠 Neuroscience",
    "📚 Books",
    "🎬 Movies",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Info Modal"
          className="fixed inset-0 flex items-center justify-center"
          shouldCloseOnEsc={true}
          ariaHideApp={false}
          overlayClassName={"bg-transparent"}
        >
          <motion.div
            className="w-full h-full flex flex-col bg-white outline-1 outline-gray-300"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="text-gray-800 hover:text-gray-600 hover:cursor-pointer self-start"
              onClick={onRequestClose}
            >
              <Close className="w-12 h-12" />
            </button>
            <div className="flex-1 overflow-y-auto">
              <h3 className="text-center text-xl font-semibold mb-2">Stats</h3>
              <div className="mx-2 mb-12">
                <div className="max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Core</h4>
                        <div className="flex flex-wrap gap-2">
                          {core.map((item, index) => (
                            <span
                              key={`core-${index}`}
                              className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded border border-blue-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                          Languages
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {languages.map((item, index) => (
                            <span
                              key={`languages-${index}`}
                              className="bg-green-50 text-green-800 text-sm font-medium px-3 py-1 rounded border border-green-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                          Preferences
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {preferences.map((item, index) => (
                            <span
                              key={`preferences-${index}`}
                              className="bg-purple-50 text-purple-800 text-sm font-medium px-3 py-1 rounded border border-purple-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                          Personality
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {personality.map((item, index) => (
                            <span
                              key={`personality-${index}`}
                              className="bg-yellow-50 text-yellow-800 text-sm font-medium px-3 py-1 rounded border border-yellow-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Hobbies</h4>
                        <div className="flex flex-wrap gap-2">
                          {hobbies.map((item, index) => (
                            <span
                              key={`hobbies-${index}`}
                              className="bg-red-50 text-red-800 text-sm font-medium px-3 py-1 rounded border border-red-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-center text-xl font-semibold mb-2">
                Philosophy
              </h3>
              <div className="mx-2 mb-12">
                <div className="max-w-md mx-auto bg-gray-50 shadow-md rounded-lg overflow-hidden">
                  <div className="p-6 text-left font-(family-name:--font-noto-serif)">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Titanism</h4>
                      <p className="mb-2 text-justify">
                        The general name of my philosophy&mdash;or rather my
                        philosophical meta-framework&mdash;heavily influenced by{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Friedrich_Nietzsche"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Friedrich Nietzsche
                        </a>
                        . It originates from the Greek mythology, drawing
                        parallels to the{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Titans"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Greek Titans
                        </a>{" "}
                        who were locked under the Mount Olympus by
                        gods&mdash;gods who are now long{" "}
                        <span className="italic">dead</span> and{" "}
                        <span className="italic">obsolete</span>. The said{" "}
                        <span className="font-bold">titans</span>, according to
                        my philosophy, are interpreted to be people who were
                        enslaved by religion and traditional beliefs to conform
                        to given norms, fitting a mold, instead of becoming
                        authentic selves&mdash;these people, these{" "}
                        <span className="font-bold">titans</span>, are now free
                        from their prison, ready to become their own{" "}
                        <span className="font-bold">gods</span>.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Titan Values
                      </h4>
                      <p className="mb-2 text-justify">
                        To stay aware and find{" "}
                        <span className="font-bold">fulfillment</span>, one
                        needs to <span className="italic">ackgnowledge</span>{" "}
                        the meaninglessness of existence in order to{" "}
                        <span className="italic">build</span> their own values
                        and meaning from the ground up&mdash;not founded in
                        inherited beliefs, but in one's own{" "}
                        <span className="italic">drive to live</span>, and one's
                        own fulfillment, whatever it might be (e.g.
                        happiness)&mdash;but it needs to be clearly stated as
                        something one chose themselves, for themselves, and not
                        something they subscribed to unconsciously. There is an
                        emphasis on{" "}
                        <span className="italic">acknowledging</span>{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Nihilism"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          nihilism
                        </a>
                        , not <span className="italic">perpetuating</span> it.
                        In essence&mdash;
                        <span className="italic">
                          a <span className="font-bold">titan</span> is an
                          individual who creates their own values to reach their
                          own fulfillment
                        </span>
                        &mdash;this is the fundamental idea behind{" "}
                        <span className="font-bold">Titanism</span>.
                        Additionally, all following ideas in this document will
                        be separated between{" "}
                        <span className="font-bold">Titanism</span> (which is
                        intentionally vaguely defined), and my very own
                        extension of Titanism called{" "}
                        <span className="font-bold">Velesian Titanism</span>{" "}
                        (referencing my own name), expanding the{" "}
                        <span className="italic">core titan principles</span>{" "}
                        with my own beliefs.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Scorched Earth
                      </h4>
                      <p className="mb-2 text-justify">
                        <span className="font-bold">Titanism</span> itself is
                        not a{" "}
                        <span className="italic">philosophy of rebellion</span>,
                        although it can definitely be used as such, if one finds
                        it necessary.{" "}
                        <span className="font-bold">Titanism</span> is mainly a
                        framework designed to help oneself with what has been{" "}
                        <span className="italic">
                          already burned and destroyed
                        </span>
                        , to the point of{" "}
                        <span className="font-bold">stagnation</span>,{" "}
                        <span className="font-bold">decadence</span>, and{" "}
                        <span className="font-bold">obsolescence</span>. It is
                        not founded in{" "}
                        <span className="italic">scorching the earth</span>, but{" "}
                        <span className="font-bold">building on top</span> of
                        its already existing ashes, for one's own sake. The
                        titans did not revolt against gods&mdash;the gods were
                        already dead, leaving their prisoners free to break
                        their chains.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Amor Fati</h4>
                      <p className="mb-2 text-justify">
                        In <span className="font-bold">Velesian Titanism</span>,
                        existence is believed to have no heritage, essentially
                        being <span className="italic">absurd</span> from its
                        beginning&mdash;
                        <span className="font-bold">there is fate</span>, yet it
                        is{" "}
                        <span className="font-bold">
                          inherently unpredictable
                        </span>
                        , perhaps due to its complexity, or maybe even due to
                        its core, intangible nature. It concludes that{" "}
                        <span className="italic">
                          meaning of everything is not inherited from any
                          primordial idea
                        </span>{" "}
                        (e.g. god), and it could never exist before our
                        consciousness&mdash;it is inherently{" "}
                        <span className="italic">absent</span> and{" "}
                        <span className="italic">chaotic</span>. Thus, one
                        should not despair due to{" "}
                        <span className="font-bold">suffering</span>, as it is a{" "}
                        <span className="italic">core part of life</span>, same
                        as <span className="font-bold">happiness</span>.
                        Instead, one should cherish their fate, however
                        depressing it could get, in order to stay{" "}
                        <span className="italic">sane</span> and{" "}
                        <span className="italic">productive</span>, allowing for
                        more fortunate events to occur, praising{" "}
                        <span className="italic">
                          resilience over surrender
                        </span>
                        .
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        The Meaning
                      </h4>
                      <p className="mb-2 text-justify">
                        <span className="font-bold">Velesian Titanism</span>{" "}
                        establishes the idea of{" "}
                        <span className="font-bold">bitter meaning</span>
                        &mdash;as life is filled with suffering,{" "}
                        <span className="italic">pain is unavoidable</span>.
                        Even more extremely, if suffering provides growth, it
                        should be <span className="italic">sought after</span>
                        &mdash;not in terms of cruelty and trauma, but in terms
                        of stepping out one's comfort zone. The{" "}
                        <span className="font-bold">fulfillment</span> does not
                        come from the finish line&mdash;it comes from the rugged
                        path one takes towards it. A titan is far from the idea
                        of{" "}
                        <span className="italic">
                          Aristotelian "Perfect Man"
                        </span>
                        , as one strives for the greatest and the perfect with{" "}
                        <span className="italic">full consciousness</span> it is
                        unattainable&mdash;absurd, yet grounded in one's own
                        meaning. My <span className="italic">very own dream</span>, as crazy as it may sound, is
                        to become <span className="font-bold">immortal</span>, and a <span className="font-bold">god</span> at that&mdash;I know I can <span className="italic">never</span> achieve it, <span className="italic">yet I still go towards it</span>&mdash;the path is
                        as real as it gets, forcing me to <span className="italic">live my fullest</span>,
                        despite the goal being unrealistic. Because one cannot
                        stop, they are always in motion, always reflecting on
                        one's path prior and now, with the goal as one's
                        motivation.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Greatest Value
                      </h4>
                      <p className="mb-2 text-justify">
                        Velesian Titanism acclaims life itself, especially one's
                        own life, as the greatest value of life. From one's
                        perspective, if their life ends, so does everything
                        else&mdash;it is gone (emphasizing: from their
                        perspective). One should love their life, as there is
                        nothing, really not a single thing besides it. As
                        Titanism encourages the creation of one's own values,
                        Velesian Titanism creates an inherent value, stating
                        that existence is always preferred to nonexistence, same
                        as Mathematics states that one is always greater than
                        zero.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Theory of Scale
                      </h4>
                      <p className="mb-2 text-justify">
                        In Velesian Titanism, drawing from quantum mechanics, it
                        is stated that universe is purely random at the micro
                        scale due to its nature/complexity (highly debated),
                        making it unpredictable (there is no free will, but fate
                        is not predefined&mdash;it is essentially random).
                        However, at the macro scale, actions are more
                        predictable (yet still indeterministic), due to billions
                        of little actions summing into one single occurring
                        pattern. What makes this idea profound, is the fact that
                        no matter how predictable a single action becomes at a
                        given time and space&mdash;it is never fully guaranteed,
                        and thus, even things we take for granted can suddenly
                        change (e.g. direction of gravity turning upside
                        down)&mdash;its probability is always between 0 and 1,
                        excluding these exact values.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Value of Value
                      </h4>
                      <p className="mb-2 text-justify">
                        In Titanism, when two opposing values clash with each
                        other, similarly to Darwin's theory of evolution, it is
                        stated that the greater value will always prevail over
                        the lesser value. Velesian Titanism expands this vague
                        definition, stating that no value is inherently greater
                        or lesser than any other. Instead, the outcome of the
                        clashing is decided in accordance to The Theory of
                        Scale. It is worth noting that in Titanism, in general,
                        a value does not need to be opposed by another
                        value&mdash;if it is self-destructive or outright
                        stupid, it is "bound" to fail.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Intelligent Egocentrism
                      </h4>
                      <p className="mb-2 text-justify">
                        Velesian Titanism favors the idea of human morality
                        being inherently egoistic. Altruism is explained as
                        action taken to help oneself indirectly (e.g. by
                        returning one's favor, through the domino effect, etc.).
                        Additionally, self-sacrifice is seen as something
                        unnatural and fundamentally broken, especially because
                        it devalues the individual from their own perspective,
                        and hinders the idea of one's life being the greatest
                        value. As in Value of Value, being egoistically unfit
                        and overly solipsistic will likely lead to one's own
                        demise.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Objective Truth
                      </h4>
                      <p className="mb-2 text-justify">
                        Titanism defines objective truth as subjective truth of
                        the majority&mdash;if something holds up for the
                        majority, it is believed to work for everyone. The key
                        takeaway from that idea is the fact that there is no
                        inherent objectivism&mdash;it is created by gathering
                        the perspective of many, requiring constant skepticism.
                        Truth is contextual&mdash;both subjective and objective
                        truth can be revisited, revaluated, and changed.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Realism</h4>
                      <p className="mb-2 text-justify">
                        Velesian Titanism favors the idea of realism, as it
                        focuses on life as it is experienced, rejecting claims
                        that lack sensible evidence.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Types of Nihilism
                      </h4>
                      <p className="mb-2 text-justify">
                        The relation of nihilism and Titanism is quite
                        paradoxical, as Titanism states that one should create
                        their own values to avoid nihilism, making them rightful
                        to change the its definition to whatever they please, as
                        one's individual perspective also dictates how they
                        define the world. What makes it troublesome, is the fact
                        that from one's own perspective, everything can be
                        nihilistic if it defies their values. The values of
                        others can be simply rejected, as they are not one's own
                        values, thus being subjectively meaningless. Velesian
                        Titanism defines six core types of nihilism:
                      </p>
                      <ul className="list-disc list-outside px-4">
                        <li className="mb-2">
                          Classic (Existential) Nihilism&mdash;the belief that
                          existence does not have any meaning, often paired with
                          the belief that existence cannot have any meaning
                          &mdash;it is a complete denial of life.
                        </li>
                        <li className="mb-2">
                          Epistemic Nihilism&mdash;the belief that knowledge is
                          impossible. Although it praises skepticism, it denies
                          the need for any kind of settlement, making it
                          dangerously chaotic, even somewhat paranoic.
                        </li>
                        <li className="mb-2">
                          Hedonism&mdash;the idea that the greatest value of
                          life is maximizing pleasure, which is synonymous with
                          quick gratification and short-lived, extreme sparks of
                          emotions. Due to its self-destructive nature, it
                          hinders one's life, being incompatible with the
                          Greatest Value.
                        </li>
                        <li className="mb-2">
                          Metaphysics&mdash;the belief that there is a plane of
                          existence that cannot be experienced. It is
                          incompatible with realism, which is core to the
                          Greatest Value.
                        </li>
                        <li className="mb-2">
                          Radical Nihilism&mdash;the belief that existence
                          should not have any meaning, paired with the belief
                          that it should be eradicated.
                        </li>
                        <li className="mb-2">
                          Subjective Nihilism&mdash;as stated above, it is the
                          idea of defining the values of others as meaningless
                          for oneself (it is probably the only type of nihilism
                          that is somewhat unavoidable while defining one's own
                          values).
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">
                        Completeness
                      </h4>
                      <p className="mb-2 text-justify">
                        Very intimate part of Velesian Titanism, defined as the
                        idea that a close relationship with another person is
                        essential for healthy functioning&mdash;providing help,
                        support, and pushing one's perspective &ndash; leading
                        to both personal and shared growth, essentially
                        completing each other. The love in a relationship is not
                        transactional, as a blind egoist would assume, but
                        shared through mutual fulfillment. It rejects the idea
                        of finding a soulmate, instead proposing that one's
                        soulmate is "built" from another person through shared
                        values and experiences (especially creating these values
                        and experiences), up to the point of becoming a single
                        being in two bodies, sharing one woven mind. It
                        encourages meaningful relationships over those that are
                        short-lived and hedonistic in nature. It also favors
                        monogamy, due to massive scientific and cultural
                        evidence supporting it over polygamy, especially given
                        the idea that trust and intimacy can never be equally
                        shared across multiple partners.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Final Thoughts
                      </h4>
                      <p className="text-justify">
                        If you managed to read thought all of this, you most
                        likely find my philosophy "interestingly"
                        repulsive&mdash;disgust is a valid feeling after all,
                        like every other one. However, if you found my
                        scribblings relatable, I am happy to hear I am not
                        alone, and there are equally eccentric people out there,
                        with the same awareness as I have. Reiterating, Titanism
                        is a framework to create your own philosophical
                        frameworks, while Velesian Titanism is on that higher
                        level, being my actual framework. It is a tool, but
                        (hopefully) not one to fill you with existential dread,
                        breaking all of your current values, and turning you
                        into a nihilist. Quite opposite, it is a tool built for
                        the sake of getting you out of nihilism, if you
                        accidentally fell into it. It has been my tool after I
                        fell into that rabbit hole, and I have never been
                        happier before I discovered it. Thanks for sticking
                        around.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </ReactModal>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
