export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm py-4">
            <a
              href="/"
              className="text-accent-green hover:text-accent-green/80 transition-colors duration-300 font-medium flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              ಮುಖ್ಯ ಪುಟ
            </a>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-900 font-semibold">ನಮ್ಮ ಬಗ್ಗೆ</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ದೇಶಿ ಕರ್ನಾಟಕ ಬಗ್ಗೆ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ಕರ್ನಾಟಕದ ಸುದ್ದಿಗಳನ್ನು ನಿಮಗೆ ತಲುಪಿಸುವ ನಮ್ಮ ಪ್ರಯತ್ನದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              <p className="text-lg">
                ದೇಶಿ ಕರ್ನಾಟಕ ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಸುದ್ದಿ ಪೋರ್ಟಲ್ ಆಗಿದೆ. ನಾವು ಕರ್ನಾಟಕದ
                ಜನರಿಗೆ ನಿಖರವಾದ, ವೇಗದ ಸುದ್ದಿಗಳನ್ನು ಒದಗಿಸುವ ಉದ್ದೇಶದಿಂದ ಕೆಲಸ
                ಮಾಡುತ್ತಿದ್ದೇವೆ.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ನಮ್ಮ ಧ್ಯೇಯ
              </h2>
              <p>
                ಕರ್ನಾಟಕದ ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನಿಗೂ ಸಮಾಜದ ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳ
                ಸುದ್ದಿಗಳನ್ನು ಸಮಯೋಚಿತವಾಗಿ ತಲುಪಿಸುವುದು ನಮ್ಮ ಮುಖ್ಯ ಧ್ಯೇಯವಾಗಿದೆ.
                ನಾವು ಸರ್ಕಾರಿ ನೀತಿಗಳು, ಆರ್ಥಿಕ ಬೆಳವಣಿಗೆ, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು
                ಮತ್ತು ಸಾಮಾಜಿಕ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ನಿಖರವಾದ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ನಮ್ಮ ಮೌಲ್ಯಗಳು
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>ನಿಖರತೆ:</strong> ಎಲ್ಲಾ ಸುದ್ದಿಗಳನ್ನು ಸತ್ಯ ಪರಿಶೀಲನೆ
                  ನಡೆಸಿ ಮಾತ್ರ ಪ್ರಕಟಿಸುತ್ತೇವೆ
                </li>
                <li>
                  <strong>ನಿಷ್ಪಕ್ಷತೆ:</strong> ಯಾವುದೇ ರಾಜಕೀಯ ಅಥವಾ ಸಾಮಾಜಿಕ
                  ಪಕ್ಷಪಾತವಿಲ್ಲದೆ ಸುದ್ದಿಗಳನ್ನು ನೀಡುತ್ತೇವೆ
                </li>
                <li>
                  <strong>ವೇಗ:</strong> ಮುಖ್ಯ ಸುದ್ದಿಗಳನ್ನು ಸಮಯೋಚಿತವಾಗಿ
                  ತಲುಪಿಸುತ್ತೇವೆ
                </li>
                <li>
                  <strong>ಸಮಾಜಿಕ ಜವಾಬ್ದಾರಿ:</strong> ಸಮಾಜದ ಹಿತಾಸಕ್ತಿಯನ್ನು
                  ಮುಂದಿಟ್ಟುಕೊಂಡು ಕೆಲಸ ಮಾಡುತ್ತೇವೆ
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ನಮ್ಮ ತಂಡ
              </h2>
              <p>
                ದೇಶಿ ಕರ್ನಾಟಕದಲ್ಲಿ ಅನುಭವಿ ಪತ್ರಕರ್ತರು, ಸಂಪಾದಕರು ಮತ್ತು ತಂತ್ರಜ್ಞರು
                ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದಾರೆ. ನಮ್ಮ ತಂಡ ಕರ್ನಾಟಕದ ವಿವಿಧ ಭಾಗಗಳಿಂದ ಬಂದಿದ್ದು,
                ಸ್ಥಳೀಯ ಸುದ್ದಿಗಳನ್ನು ಚೆನ್ನಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡಿದೆ.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ನಮ್ಮ ಪ್ರಯತ್ನಗಳು
              </h2>
              <p>
                ನಾವು ಕರ್ನಾಟಕದ ಜನರಿಗೆ ಸುದ್ದಿಗಳನ್ನು ಮಾತ್ರ ಒದಗಿಸುವುದಲ್ಲದೆ, ಸಮಾಜದ
                ಅಭಿವೃದ್ಧಿಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತೇವೆ. ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ಮತ್ತು ಪರಿಸರ
                ಸಂರಕ್ಷಣೆ ಬಗ್ಗೆ ಅರಿವು ಮೂಡಿಸುವ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸುತ್ತೇವೆ.
              </p>

              <div className="bg-accent-green/10 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-accent-green mb-2">
                  ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ
                </h3>
                <p className="text-accent-green">
                  ದೇಶಿ ಕರ್ನಾಟಕದೊಂದಿಗೆ ಸೇರಿ ಕರ್ನಾಟಕದ ಅಭಿವೃದ್ಧಿಗೆ ಕೊಡುಗೆ ನೀಡಿ.
                  ನಿಮ್ಮ ಸಲಹೆಗಳು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ನಮಗೆ ಕಳುಹಿಸಿ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
