ٍimport { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

interface MessageContentProps {
  message?: string;
  messageTwo?: string;
  isOpen?: boolean;
}

const MessageContent = ({
  message = "will you be mine forever",
  messageTwo = "انا بس عايزه اقولك ان وغلاوه اغلى حاجه عندى م حبيت ف الدنيا كلها حد غيرك ولا عمرى كنت ولا هكون كدا مع  حد ولا هعرف بجد وكل اللى بينا دا مستحييل اصلا اقدر اكرره مع حد غيرك وعمرى م تخيلت حياتى مع حد انا كل اللى عشتو معاك دى اول مره ف حياتى اعيشو صدقنى هى مش بالسنين ولا بالشهور ولا بالايام هى بالناس لان لو بالسنين كان زمانك حبيت بنات كتير وانت بتقول محبتش حد انا عارفه انى غلطت ف حقك كتير اوى ف بجد حقك عليا ينور عينى وانا والله بحاول على قد م اقدر انى مزعلكش منى وانى مسيبش يوم يعدى تنام فيه زعلان منى حتى لو السبب تافه انا مش هقدر اعيش من غيرك ي سيف بجد مش عارفه اصلا اتخيل انك مش موجود يا مؤمن دنا بقيت احلم بيك لدرجه بشوفك ف الاحلام اللى المفروض انت متبقاش فيها بتبقى فيها والله م مجرد كلام هو انا لو مش بحبك ي سيف هتعب نفسى معاك لى هوجع قلبى لى طيب عشان اصالحك هحاول لى مزعلكش يبنى م لو الموضوع تعود ف انا عندى يغور اللى متعوده عليه دا بس المهم راحه بالى انا مبحبش اوجع دماغى صدقنى انا كلامى دا قلتهولك بدل المره مليون مره بس والله يبنى دا اللى ف قلبى ليك عارف نفسى بجد اشوفك واقولك الكلام دا وانا بصالك ف عنيك يمكن يمكن تصدقنى انا مبعرفش اعبر ي سيف مبعرفش اتكلم بجد مبعرفش اقول اللى ف قلبى كدا لازم هيكون فى كلمه هتعك الدنيا اكتر انا عارفه والله عارفه انك جيت على نفسك كتير عشانى وعارفه انى زعلتك كتير بجد وبحاول والله على قد م اقدر انى معملش حاجه تانيه بس انت بتزعل على اقل سبب وحتى لو انا زعلت من حاجه انت بتقوم زعلان انى زعلت بص ي سيف م الاخر كدا يبنى انا مش بحبك بس انا بعشقك انا بعشق كل حاجه فيك عندى استعداد افضل جمبك لاخر يوم ف عمرى من غير م ازهق والله انت بالنسبالى تستاهل وتستاهل اى حاجه بجد وتستاهل كل حاجه حلوه انا بعشقك بكل تفاصيلك بجد وبموت فيك وبحبك اوى وبدمنك بجد بعشق كل حاجه فيك حتى رخامتك وربنا ي سيف م حبيت ف حياتى كلها غيرك ولا فى حد ف الدنيا شافنى زى م انت شوفتنى ولا عمرى اتعاملت مع حد زى م بتعامل معاك انا كان بالنسبالى اللى زعل يتفلق مبيهمنيش بس انت بجد لا من قبل م احبك وانا مبيهونش عليا زعلك انت بالذات حبيتك لى مش عارفه معنديش اى فكره عن سبب الحب دا بس بجد انت تستاهلو وتستاهل احلى حاجه ف الدنيا بجد انت نور عينى وكل حياتى حرفيا لو طلبت عيونى والله م يتعزوا عليك ينور عينى وربنا ي سيف ليك غلاوه عندى عمرها م كانت ف قلبى لحد معرفش حبيتك كدا ازاى عارف سعات بتوحشنى حتى وانا بكلمك بحبك اوى بجدد بعشق صوتك بحب صوتك اوى بجد وبحب عيونك اللهم بارك انت كلك كدا تحفه بجد بحبك اوى بجد ي سيف انا بعشقك بجد حقك عليا ينور عينى حقك عليا بجد حقك عليا ينور عينى بحبك اوى بجد انا لو فضلت اقولك بحبك من هنا لاخر يوم ف عمرى م هعرف اقول انا بحبك قد اى بجد بدعى كل يوم وكل ساعه وكل ثانيه انك تكون نصيبى نفسى بجد تكون نصيبى ونفضل نستحمل بعض كدا بس لحد امتى انا معرفش انت هتستحمل لحد امتى بس انا عندى استعداد استحملك لاخر يوم ف عمرى والله بحبك اوى بجد بعشقك يعيونى",
  isOpen = true,
}: MessageContentProps) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const buttonWidth = 200; // Approximate button width
    const buttonHeight = 50; // Approximate button height
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({
      x: newX - window.innerWidth / 2,
      y: newY - window.innerHeight / 2,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#8D53AE]/90 to-[#801E5A]/90 backdrop-blur-sm p-4"
        >
          <motion.div
            className="bg-gradient-to-br from-[#8D53AE] to-[#801E5A] text-white p-8 rounded-xl shadow-xl w-[600px] relative border border-pink-400/30"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <motion.div
              className="relative mb-8"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                className="w-24 h-24 mx-auto text-pink-400"
                fill="#EC4899"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {"✨"}
              </motion.div>
            </motion.div>
            <h2 className="text-3xl font-bold text-center mb-8 text-pink-100">
              {message}
            </h2>

            <div className="flex flex-col items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setShowSuccessModal(true)}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-12 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
                >
                  Yes 💖
                </Button>
              </motion.div>

              <motion.div
                animate={noButtonPosition}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ position: "relative", zIndex: 20 }}
                className="absolute"
              >
                <Button
                  onMouseEnter={moveNoButton}
                  onMouseMove={moveNoButton}
                  variant="outline"
                  className="bg-transparent border-2 border-pink-400 text-pink-100 px-12 py-3 rounded-full text-lg font-bold hover:bg-pink-500/10"
                >
                  No 💔
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-hidden"
        >
          <motion.div
            className="relative w-96 h-96"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M50 88.9L11.1 50c-21.5-21.5-21.5-56.3 0-77.8s56.3-21.5 77.8 0 21.5 56.3 0 77.8L50 88.9z"
                fill="#EC4899"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 relative w-full max-w-md">
                {/* Background Hearts */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: Math.random() * 400 - 200,
                      y: Math.random() * 400 - 200,
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: Math.random() * 0.5 + 0.5,
                      opacity: Math.random() * 0.3 + 0.1,
                    }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.5,
                    }}
                  >
                    <Heart className="w-8 h-8 text-pink-400" fill="#EC4899" />
                  </motion.div>
                ))}

                {/* Heart-shaped container for text */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="relative z-10"
                >
                  <div className="text-center mb-14">
                    <h2 className="lg:text-2xl md:text-lg sm:text-md font-bold text-white font-mono leading-loose">
                      {messageTwo}
                    </h2>
                  </div>
                  <div className="relative h-32">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 bottom-0"
                        initial={{ y: 0, scale: 0 }}
                        animate={{
                          y: -100 - Math.random() * 50,
                          scale: 1,
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: 1.5 + i * 0.2,
                          ease: "easeOut",
                        }}
                      >
                        <Heart
                          className="w-6 h-6 text-pink-400"
                          fill="#EC4899"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* Floating hearts animation */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2"
              initial={{
                y: 1000,
                x: Math.random() * 800 - 400,
                scale: 0,
              }}
              animate={{
                y: -1000,
                scale: Math.random() * 1 + 0.5,
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            >
              <Heart className="w-6 h-6 text-pink-400" fill="#EC4899" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageContent;
