import React from "react";
import ReactModal from "react-modal";
import { Close } from "../components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface InfoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  openImageModal: (img: string) => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onRequestClose,
  openImageModal,
}) => {
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

  const values = [
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

  const philosophyImages = [
    process.env.PUBLIC_URL + "/img/philosophy01.png",
    process.env.PUBLIC_URL + "/img/philosophy02.png",
    process.env.PUBLIC_URL + "/img/philosophy03.png",
    process.env.PUBLIC_URL + "/img/philosophy04.png",
    process.env.PUBLIC_URL + "/img/philosophy05.png",
    process.env.PUBLIC_URL + "/img/philosophy06.png",
    process.env.PUBLIC_URL + "/img/philosophy07.png",
    process.env.PUBLIC_URL + "/img/philosophy08.png",
    process.env.PUBLIC_URL + "/img/philosophy09.png",
    process.env.PUBLIC_URL + "/img/philosophy10.png",
    process.env.PUBLIC_URL + "/img/philosophy11.png",
    process.env.PUBLIC_URL + "/img/philosophy12.png",
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
          style={{
            content: {
              zIndex: 1000,
            },
            overlay: {
              zIndex: 990,
            },
          }}
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
                          Values
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {values.map((item, index) => (
                            <span
                              key={`values-${index}`}
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
                    <div>
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
                        my philosophy, are interpreted to be the people who were
                        enslaved by religion and traditional beliefs to conform
                        to given norms, fitting a mold, instead of becoming
                        authentic selves&mdash;these people, these{" "}
                        <span className="font-bold">titans</span>, are now free
                        from their prison, ready to become their own{" "}
                        <span className="font-bold">gods</span>.
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[0]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[0])}
                        />
                      </div>
                    </div>

                    <div>
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
                      </p>
                      <p className="mb-2 text-justify">
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
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[1]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[1])}
                        />
                      </div>
                    </div>

                    <div>
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
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[2]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[2])}
                        />
                      </div>
                    </div>

                    <div>
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
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[3]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[3])}
                        />
                      </div>
                    </div>

                    <div>
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
                        meaning.
                      </p>
                      <p className="mb-2 text-justify">
                        My <span className="italic">very own dream</span>, as
                        crazy as it may sound, is to become{" "}
                        <span className="font-bold">immortal</span>, and a{" "}
                        <span className="font-bold">god</span> at that&mdash;I
                        know I can <span className="italic">never</span> achieve
                        it,{" "}
                        <span className="italic">
                          yet I still go towards it
                        </span>
                        &mdash;the path is as real as it gets, forcing me to{" "}
                        <span className="italic">live my fullest</span>, despite
                        the goal being unrealistic. Because one cannot stop,
                        they are always in motion, always reflecting on one's
                        path prior and now, with the goal as one's motivation.
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[4]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[4])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Greatest Value
                      </h4>
                      <p className="mb-2 text-justify">
                        <span className="font-bold">Velesian Titanism</span>{" "}
                        acclaims <span className="italic">life itself</span>,
                        especially{" "}
                        <span className="italic">one's own life</span>, as{" "}
                        <span className="italic">
                          the greatest value of life
                        </span>
                        . From one's perspective, if their life ends, so does
                        everything else&mdash;it is gone (emphasizing:{" "}
                        <span className="italic">from their perspective</span>).
                        One should{" "}
                        <span className="font-bold">love their life</span>, as
                        there is <span className="italic">nothing</span>, really
                        not a single thing besides it. As{" "}
                        <span className="font-bold">Titanism</span> encourages
                        the creation of one's own values,{" "}
                        <span className="font-bold">Velesian Titanism</span>{" "}
                        creates an inherent value, stating that{" "}
                        <span className="italic">
                          existence is always preferred to nonexistence
                        </span>
                        , same as Mathematics states that one is always greater
                        than zero.
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[5]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[5])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Theory of Scale
                      </h4>
                      <p className="mb-2 text-justify">
                        In <span className="font-bold">Velesian Titanism</span>,
                        drawing from{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Quantum_mechanics"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          quantum mechanics
                        </a>
                        , it is stated that{" "}
                        <span className="italic">
                          the universe is purely random
                        </span>{" "}
                        at the <span className="font-bold">micro scale</span>{" "}
                        due to its nature/complexity (highly debated), making it{" "}
                        <span className="italic">unpredictable</span> (there is
                        no free will, but fate is not predefined&mdash;it is
                        essentially random). However, at the{" "}
                        <span className="font-bold">macro scale</span>, actions
                        are more predictable (yet still indeterministic), due to
                        billions of little actions summing into one single
                        occurring <span className="italic">pattern</span>. What
                        makes this idea profound, is the fact that no matter how{" "}
                        <span className="italic">predictable</span> a single
                        action becomes at a given time and space&mdash;it is
                        never fully <span className="italic">guaranteed</span>,
                        and thus, even things we take for granted can suddenly
                        change (e.g. direction of gravity turning upside
                        down)&mdash;its probability is always between 0 and 1,
                        excluding these exact values.
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[6]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[6])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Value of Value
                      </h4>
                      <p className="mb-2 text-justify">
                        In <span className="font-bold">Titanism</span>, when two
                        opposing values <span className="italic">clash</span>{" "}
                        with each other, in a Darwinian fashion, it is stated
                        that the <span className="italic">greater value</span>{" "}
                        will always prevail over the{" "}
                        <span className="italic">lesser value</span>.{" "}
                        <span className="font-bold">Velesian Titanism</span>{" "}
                        expands this vague definition, stating that{" "}
                        <span className="italic">
                          no value is inherently greater or lesser than any
                          other
                        </span>
                        . Instead, the outcome of the clashing is decided in
                        accordance to{" "}
                        <span className="font-bold">The Theory of Scale</span>.
                        It is worth noting that in{" "}
                        <span className="font-bold">Titanism</span>, in general,
                        a value does not need to be opposed by another
                        value&mdash;if it is{" "}
                        <span className="italic">self-destructive</span> or{" "}
                        <span className="italic">outright stupid</span>, it is{" "}
                        <span className="italic">"bound"</span> to fail.
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[7]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[7])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Intelligent Egocentrism
                      </h4>
                      <p className="mb-2 text-justify">
                        <span className="font-bold">Velesian Titanism</span>{" "}
                        favors the idea of human morality being{" "}
                        <span className="italic">inherently egoistic</span>.{" "}
                        <span className="font-bold">Altruism</span> is explained
                        as action taken to{" "}
                        <span className="italic">help oneself indirectly</span>{" "}
                        (e.g. by returning one's favor, through the domino
                        effect, etc.). Additionally,{" "}
                        <span className="font-bold">self-sacrifice</span> is
                        seen as something{" "}
                        <span className="italic">unnatural</span> and{" "}
                        <span className="italic">fundamentally broken</span>,
                        especially because it{" "}
                        <span className="italic">devalues</span> the individual
                        from their own perspective, and{" "}
                        <span className="italic">hinders</span> the idea of
                        one's life being the greatest value. As in{" "}
                        <span className="font-bold">Value of Value</span>, being
                        egoistically unfit and overly{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Solipsism"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          solipsistic
                        </a>{" "}
                        will likely lead to one's own{" "}
                        <span className="italic">demise</span>.
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[8]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[8])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Nature of Truth
                      </h4>
                      <p className="mb-2 text-justify">
                        <span className="font-bold">Titanism</span> defines{" "}
                        <span className="italic">objective truth</span> as{" "}
                        <span className="italic">
                          subjective truth of the majority
                        </span>
                        &mdash;if something holds up for the majority, it is
                        believed to work for everyone. The key takeaway from
                        that idea is the fact that{" "}
                        <span className="italic">
                          there is no inherent objectivism
                        </span>
                        &mdash;it is created by gathering the perspective of
                        many, requiring constant{" "}
                        <span className="italic">skepticism</span>. Truth is{" "}
                        <span className="italic">contextual</span>&mdash;both
                        subjective and objective truth can be revisited,
                        revaluated, and changed.
                      </p>
                      <p className="mb-2 text-justify">
                        This is a direct reference to{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Postpositivism"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Postpositivism
                        </a>{" "}
                        if it was considered as a social construct.
                      </p>
                      <p className="mb-2 text-justify">
                        Moreover, the definition of{" "}
                        <span className="font-bold">subjective truth</span> in{" "}
                        <span className="font-bold">Velesian Titanism</span> is
                        direcrly taken from{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Radical_empiricism"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Radical Empiricism
                        </a>
                        , sweetened with some good ol'{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Pragmatism"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Pragmatism
                        </a>
                        .
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[9]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[9])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Types of Nihilism
                      </h4>
                      <p className="mb-2 text-justify">
                        The relation of <span className="italic">nihilism</span>{" "}
                        and <span className="font-bold">Titanism</span> is quite
                        paradoxical, as{" "}
                        <span className="font-bold">Titanism</span> states that
                        one should{" "}
                        <span className="italic">create their own values</span>{" "}
                        to avoid nihilism, making them rightful to change the
                        its definition to{" "}
                        <span className="italic">whatever they please</span>, as
                        one's individual perspective also dictates how they
                        define the world. What makes it troublesome, is the fact
                        that from one's own perspective,{" "}
                        <span className="italic">
                          everything can be nihilistic
                        </span>{" "}
                        if it defies their values. The values of others can be
                        simply <span className="italic">rejected</span>, as they
                        are not one's own values, thus being subjectively{" "}
                        <span className="italic">meaningless</span>.{" "}
                        <span className="font-bold">Velesian Titanism</span>{" "}
                        defines six core types of nihilism:
                      </p>
                      <ul className="list-disc list-outside px-4 text-justify">
                        <li className="mb-2">
                          <span className="font-bold">
                            Classic (Existential) Nihilism
                          </span>{" "}
                          &ndash; the belief that{" "}
                          <span className="italic">
                            existence does not have any meaning
                          </span>
                          , often paired with the belief that{" "}
                          <span className="italic">
                            existence <span className="font-bold">cannot</span>{" "}
                            have any meaning
                          </span>
                          &mdash;it is a complete denial of life.
                        </li>
                        <li className="mb-2">
                          <span className="font-bold">Epistemic Nihilism</span>{" "}
                          &ndash; the belief that{" "}
                          <span className="italic">
                            knowledge is impossible
                          </span>
                          . Although it praises skepticism, it denies the need
                          for any kind of settlement, making it{" "}
                          <span className="italic">dangerously chaotic</span>,
                          even somewhat paranoid.
                        </li>
                        <li className="mb-2">
                          <a
                            href="https://en.wikipedia.org/wiki/Hedonism"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline font-bold"
                          >
                            Hedonism
                          </a>{" "}
                          &ndash; the idea that the greatest value of life is{" "}
                          <span className="italic">maximizing pleasure</span>,
                          which is synonymous with quick gratification and
                          short-lived, extreme sparks of emotions. Due to its{" "}
                          <span className="italic">
                            self-destructive nature
                          </span>
                          , it hinders one's life, being incompatible with the{" "}
                          <span className="font-bold">Greatest Value</span>.
                        </li>
                        <li className="mb-2">
                          <a
                            href="https://en.wikipedia.org/wiki/Metaphysics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline font-bold"
                          >
                            Metaphysics
                          </a>{" "}
                          &ndash; the belief that{" "}
                          <span className="italic">
                            there is a plane of existence that cannot be
                            experienced
                          </span>
                          . It is incompatible with the{" "}
                          <span className="font-bold">Nature of Truth</span>.
                        </li>
                        <li className="mb-2">
                          <span className="font-bold">Radical Nihilism</span>{" "}
                          &ndash; the belief that{" "}
                          <span className="italic">
                            existence should not have any meaning
                          </span>
                          , paired with the belief that it should be{" "}
                          <span className="italic">eradicated</span>.
                        </li>
                        <li className="mb-2">
                          <span className="font-bold">Subjective Nihilism</span>{" "}
                          &ndash; as stated above, it is the idea of defining
                          the values of others as{" "}
                          <span className="italic">meaningless</span> for
                          oneself (it is probably the only type of nihilism that
                          is somewhat unavoidable while defining one's own
                          values).
                        </li>
                      </ul>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[10]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[10])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Completeness
                      </h4>
                      <p className="mb-2 text-justify">
                        Very intimate part of{" "}
                        <span className="font-bold">Velesian Titanism</span>,
                        defined as the idea that{" "}
                        <span className="italic">
                          a close relationship with another person is essential
                          for healthy functioning
                        </span>
                        &mdash;providing help, support, and pushing one's
                        perspective &ndash; leading to both{" "}
                        <span className="font-bold">
                          personal and shared growth
                        </span>
                        , essentially{" "}
                        <span className="italic">completing each other</span>.
                        The <span className="font-bold">love</span> in a
                        relationship is not{" "}
                        <span className="italic">transactional</span>, as a
                        blind egoist would assume, but{" "}
                        <span className="italic">
                          shared through mutual fulfillment
                        </span>
                        .
                      </p>
                      <p className="mb-2 text-justify">
                        It rejects the idea of{" "}
                        <span className="italic">finding a soulmate</span>,
                        instead proposing that one's soulmate is{" "}
                        <span className="italic">"built"</span> from another
                        person through shared values and experiences (especially{" "}
                        <span className="italic">creating</span> these values
                        and experiences), up to the point of (metaphorically)
                        becoming a{" "}
                        <span className="font-bold">single being</span> in{" "}
                        <span className="font-bold">two bodies</span>, sharing
                        one woven mind.
                      </p>
                      <p className="mb-2 text-justify">
                        It encourages{" "}
                        <span className="italic">meaningful relationships</span>{" "}
                        over those that are short-lived and hedonistic in
                        nature.
                      </p>
                      <p className="mb-2 text-justify">
                        It also favors <span className="italic">monogamy</span>,
                        due to massive scientific and cultural evidence
                        supporting it over polygamy, especially given the idea
                        that trust and intimacy can never be equally shared
                        across multiple partners.
                      </p>
                      <div className="flex justify-center mx-2 my-6">
                        <img
                          src={philosophyImages[11]}
                          alt="philosophy"
                          className="max-w-full h-auto rounded-lg hover:cursor-pointer border-1 border-gray-100"
                          onClick={() => openImageModal(philosophyImages[11])}
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Final Thoughts
                      </h4>
                      <p className="mb-2 text-justify">
                        If you managed to read thought all of this, you most
                        likely find my philosophy{" "}
                        <span className="italic">interestingly</span>{" "}
                        repulsive&mdash;disgust is a valid feeling after all,
                        like every other one. However, if you found my
                        scribblings relatable, I am happy to hear I am not
                        alone, and there are equally eccentric people out there,
                        with the same awareness as I have.
                      </p>
                      <p className="mb-2 text-justify">
                        Reiterating, <span className="font-bold">Titanism</span>{" "}
                        is a framework to create your own philosophical
                        frameworks, while{" "}
                        <span className="font-bold">Velesian Titanism</span> is
                        on that higher level, being my actual framework. It is a{" "}
                        <span className="font-bold">tool</span>, but (hopefully)
                        not one to fill you with existential dread, breaking all
                        of your current values, and turning you into a{" "}
                        <span className="italic">nihilist</span>. Quite
                        opposite, it is a tool built for the sake of getting you{" "}
                        <span className="italic">out of nihilism</span>, if you
                        accidentally fell into it. It has been my tool after I
                        fell into that rabbit hole, and I have never been
                        happier before I discovered it.
                      </p>
                      <p className="text-justify">
                        Thanks for sticking around.
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
