export default function PrivacyPage() {
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
            <span className="text-gray-900 font-semibold">ಗೌಪ್ಯತಾ ನೀತಿ</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ಗೌಪ್ಯತಾ ನೀತಿ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ನಾವು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ ಎಂಬುದರ ಬಗ್ಗೆ
              ತಿಳಿಯಿರಿ
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              <p className="text-lg">
                ಕನ್ನಡ ಎಕ್ಸ್‌ಪ್ರೆಸ್ ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ಗೌರವಿಸುತ್ತದೆ. ಈ ಗೌಪ್ಯತಾ
                ನೀತಿಯು ನಮ್ಮ ವೆಬ್‌ಸೈಟ್ ಮತ್ತು ಸೇವೆಗಳನ್ನು ಬಳಸುವಾಗ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ
                ಮಾಹಿತಿಯನ್ನು ನಾವು ಹೇಗೆ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ, ಬಳಸುತ್ತೇವೆ ಮತ್ತು
                ರಕ್ಷಿಸುತ್ತೇವೆ ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತದೆ.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ಮಾಹಿತಿ ಸಂಗ್ರಹ
              </h2>
              <p>ನಾವು ಈ ಕೆಳಗಿನ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸಬಹುದು:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ನಿಮ್ಮ IP ವಿಳಾಸ ಮತ್ತು ಬ್ರೌಸರ್ ಮಾಹಿತಿ</li>
                <li>ನಮ್ಮ ಸೈಟ್‌ನಲ್ಲಿ ನೀವು ಭೇಟಿ ನೀಡುವ ಪುಟಗಳು</li>
                <li>ಸಮಯ ಮತ್ತು ದಿನಾಂಕದ ಮಾಹಿತಿ</li>
                <li>ಕುಕೀಗಳ ಮೂಲಕ ಸಂಗ್ರಹಿಸಿದ ಮಾಹಿತಿ</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ಮಾಹಿತಿ ಬಳಕೆ
              </h2>
              <p>
                ಸಂಗ್ರಹಿಸಿದ ಮಾಹಿತಿಯನ್ನು ನಾವು ಈ ಕೆಳಗಿನ ಉದ್ದೇಶಗಳಿಗೆ ಬಳಸುತ್ತೇವೆ:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ನಮ್ಮ ಸೈಟ್‌ನ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸುಧಾರಿಸಲು</li>
                <li>ಬಳಕೆದಾರರ ಅನುಭವವನ್ನು ವೈಯಕ್ತೀಕರಿಸಲು</li>
                <li>ಸುದ್ದಿಗಳು ಮತ್ತು ನವೀಕರಣಗಳನ್ನು ತಲುಪಿಸಲು</li>
                <li>ತಾಂತ್ರಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸಲು</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ಮಾಹಿತಿ ಹಂಚಿಕೆ
              </h2>
              <p>
                ನಾವು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಮೂರನೇ ಪಕ್ಷದೊಂದಿಗೆ
                ಹಂಚಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಆದಾಗ್ಯೂ, ಕಾನೂನಿನ ಅವಶ್ಯಕತೆಗಳಿರುವ ಸಂದರ್ಭಗಳಲ್ಲಿ
                ಅಥವಾ ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ಅಗತ್ಯವಿರುವಾಗ ಮಾತ್ರ ಹಂಚಿಕೊಳ್ಳಬಹುದು.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ಕುಕೀಗಳ ಬಳಕೆ
              </h2>
              <p>
                ನಮ್ಮ ಸೈಟ್ ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತದೆ. ಕುಕೀಗಳು ನಿಮ್ಮ ಬ್ರೌಸಿಂಗ್
                ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ನೀವು ಬಯಸಿದರೆ ಕುಕೀಗಳನ್ನು
                ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಬಹುದು, ಆದರೆ ಇದು ಕೆಲವು ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು
                ಪ್ರಭಾವಿತಗೊಳಿಸಬಹುದು.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ಮಾಹಿತಿ ರಕ್ಷಣೆ
              </h2>
              <p>
                ನಿಮ್ಮ ಮಾಹಿತಿಯ ರಕ್ಷಣೆ ನಮಗೆ ಪ್ರಮುಖವಾಗಿದೆ. ನಾವು ಉತ್ತಮ ಭದ್ರತಾ
                ಕ್ರಮಗಳನ್ನು ಅನುಸರಿಸುತ್ತೇವೆ ಮತ್ತು ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಅನಧಿಕೃತ
                ಪ್ರವೇಶದಿಂದ ರಕ್ಷಿಸುತ್ತೇವೆ.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ನಿಮ್ಮ ಹಕ್ಕುಗಳು
              </h2>
              <p>ನಿಮಗೆ ಈ ಕೆಳಗಿನ ಹಕ್ಕುಗಳಿವೆ:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಪ್ರವೇಶಿಸುವ ಹಕ್ಕು</li>
                <li>ಮಾಹಿತಿಯನ್ನು ಸರಿಪಡಿಸುವ ಹಕ್ಕು</li>
                <li>ಮಾಹಿತಿಯನ್ನು ಅಳಿಸುವ ಹಕ್ಕು</li>
                <li>ಮಾಹಿತಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಿರ್ಬಂಧಿಸುವ ಹಕ್ಕು</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ಬದಲಾವಣೆಗಳು
              </h2>
              <p>
                ಈ ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ನಾವು ಸಮಯೋಚಿತವಾಗಿ ನವೀಕರಿಸಬಹುದು. ಪ್ರಮುಖ
                ಬದಲಾವಣೆಗಳನ್ನು ನಮ್ಮ ಸೈಟ್‌ನಲ್ಲಿ ಪ್ರಕಟಿಸುತ್ತೇವೆ.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                ಸಂಪರ್ಕ
              </h2>
              <p>
                ಈ ಗೌಪ್ಯತಾ ನೀತಿಯ ಬಗ್ಗೆ ನಿಮಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ, ದಯವಿಟ್ಟು
                ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.
              </p>

              <div className="bg-orange-50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  ನಮ್ಮ ಗೌಪ್ಯತೆ ಬಗ್ಗೆ
                </h3>
                <p className="text-orange-700">
                  ನಿಮ್ಮ ಗೌಪ್ಯತೆ ನಮಗೆ ಅತ್ಯಂತ ಮುಖ್ಯ. ನಾವು ನಿಮ್ಮ ನಂಬಿಕೆಯನ್ನು
                  ಕಾಪಾಡಲು ಬದ್ಧರಾಗಿದ್ದೇವೆ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
