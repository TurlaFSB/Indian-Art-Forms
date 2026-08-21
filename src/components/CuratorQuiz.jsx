import React, { useState } from "react";
import { CURATOR_QUIZ_QUESTIONS } from "../data/artData";
import { soundEngine } from "../utils/soundEngine";
import {
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Printer,
  X
} from "lucide-react";

export default function CuratorQuiz({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [candidateName, setCandidateName] = useState("PRANAV VERMA (RA2411030010008)");

  const question = CURATOR_QUIZ_QUESTIONS[currentStep];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    soundEngine.playChime("select");
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === question.correct;
    if (isCorrect) {
      soundEngine.playChime("route");
      setScore(s => s + 1);
    } else {
      soundEngine.playChime("select");
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: question.id,
        selected: selectedOption,
        correct: question.correct,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    soundEngine.playChime("select");
    if (currentStep < CURATOR_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(s => s + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsComplete(true);
      soundEngine.playChime("open");
    }
  };

  const handleRestart = () => {
    soundEngine.playChime("select");
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setIsComplete(false);
  };

  return (
    <div className="curator-quiz-modal">
      <div className="quiz-header">
        <div className="quiz-title-block">
          <div className="eyebrow"><Award size={13} /> CURATOR CERTIFICATION CHALLENGE</div>
          <h2>National Art History Examination</h2>
        </div>
        {onClose && (
          <button className="quiz-close-btn" onClick={onClose}>
            <X size={16} /> <span>CLOSE CHALLENGE</span>
          </button>
        )}
      </div>

      <div className="quiz-body">
        {!isComplete ? (
          <div className="quiz-active-layout">
            {/* Progress Header */}
            <div className="quiz-progress-bar">
              <div className="progress-meta">
                <span>TIER {currentStep + 1} OF {CURATOR_QUIZ_QUESTIONS.length}: {question.level}</span>
                <b>SCORE: {score} / {CURATOR_QUIZ_QUESTIONS.length}</b>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${((currentStep + 1) / CURATOR_QUIZ_QUESTIONS.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="question-card">
              <span className="question-tier-tag">{question.level}</span>
              <h3>{question.question}</h3>
            </div>

            {/* Options List */}
            <div className="options-stack">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOpt = idx === question.correct;

                let optionStateClass = "";
                if (isAnswerSubmitted) {
                  if (isCorrectOpt) optionStateClass = "correct-opt";
                  else if (isSelected && !isCorrectOpt) optionStateClass = "wrong-opt";
                } else if (isSelected) {
                  optionStateClass = "selected-opt";
                }

                return (
                  <button
                    key={idx}
                    className={`quiz-option-btn ${optionStateClass}`}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                  >
                    <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                    <p>{opt}</p>
                    {isAnswerSubmitted && isCorrectOpt && (
                      <CheckCircle2 size={18} className="icon-correct" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrectOpt && (
                      <XCircle size={18} className="icon-wrong" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Educational Explanation Box (Shown after submitting) */}
            {isAnswerSubmitted && (
              <div className="explanation-box">
                <div className="explanation-title">
                  <Sparkles size={14} />
                  <span>CURATORIAL EXPLANATION & CONTEXT</span>
                </div>
                <p>{question.explanation}</p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="quiz-action-bar">
              {!isAnswerSubmitted ? (
                <button
                  className="submit-answer-btn"
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                >
                  CONFIRM ANSWER <ArrowRight size={14} />
                </button>
              ) : (
                <button className="next-question-btn" onClick={handleNextQuestion}>
                  {currentStep < CURATOR_QUIZ_QUESTIONS.length - 1
                    ? "NEXT TIER QUESTION"
                    : "VIEW CERTIFICATION RESULTS"}{" "}
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* COMPLETION CERTIFICATE */
          <div className="curator-certificate-view">
            <div className="certificate-frame">
              <div className="cert-border-corner top-left" />
              <div className="cert-border-corner top-right" />
              <div className="cert-border-corner bottom-left" />
              <div className="cert-border-corner bottom-right" />

              <div className="cert-header">
                <ShieldCheck size={36} className="cert-seal-icon" />
                <span className="cert-kicker">NATIONAL DIGITAL MUSEUM OF INDIAN ART HISTORY</span>
                <h1>CURATOR CERTIFICATION</h1>
                <p className="cert-sub">This is to officially certify that</p>
              </div>

              <div className="cert-candidate-name">
                <input
                  type="text"
                  value={candidateName}
                  onChange={e => setCandidateName(e.target.value)}
                  placeholder="Enter your name..."
                />
              </div>

              <div className="cert-body-text">
                <p>
                  has successfully completed the comprehensive 10-Tier Examination on the Geographic Spread, Mineral Chemistry, Spatial Philosophy, and Modern Transformations of Indian Art History.
                </p>

                <div className="cert-score-metrics">
                  <div className="metric-box">
                    <small>FINAL SCORE</small>
                    <b>{score} / {CURATOR_QUIZ_QUESTIONS.length}</b>
                  </div>
                  <div className="metric-box">
                    <small>CURATORIAL RANK</small>
                    <b>
                      {score >= 9
                        ? "Master Curator"
                        : score >= 7
                        ? "Senior Research Curator"
                        : score >= 5
                        ? "Associate Scholar"
                        : "Junior Fellow"}
                    </b>
                  </div>
                  <div className="metric-box">
                    <small>YEAR OF CONFERRAL</small>
                    <b>2026 CE</b>
                  </div>
                </div>
              </div>

              <div className="cert-signatures">
                <div className="signature-line">
                  <span>The Living Canvas Board</span>
                  <small>CURATORIAL DIRECTORATE</small>
                </div>
                <div className="cert-seal-badge">
                  <b>LC</b>
                  <span>OFFICIAL DIGITAL SEAL</span>
                </div>
                <div className="signature-line">
                  <span>Academic Advisory Council</span>
                  <small>INDIAN ART HISTORY CO1</small>
                </div>
              </div>
            </div>

            <div className="certificate-actions">
              <button className="print-cert-btn" onClick={() => window.print()}>
                <Printer size={15} /> PRINT / SAVE CERTIFICATE (PDF)
              </button>
              <button className="restart-quiz-btn" onClick={handleRestart}>
                <RotateCcw size={14} /> RETAKE EXAMINATION
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
