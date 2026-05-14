'use client';

import { useState, useEffect, useCallback } from 'react';
import { FaSyncAlt, FaShieldAlt } from 'react-icons/fa';

const numberWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

export function MathCaptcha({ onVerify }) {
  const [isMounted, setIsMounted] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [displayMode, setDisplayMode] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasError, setHasError] = useState(false);

  const generateCaptcha = useCallback(() => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    const ops = ['+', '-', '*'];
    const op = ops[Math.floor(Math.random() * ops.length)];

    if (op === '-' && n1 < n2) {
      setNum1(n2);
      setNum2(n1);
    } else {
      setNum1(n1);
      setNum2(n2);
    }
    
    setOperator(op);
    setDisplayMode(Math.floor(Math.random() * 3));
    setUserAnswer('');
    setHasError(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    generateCaptcha();
  }, [generateCaptcha]);

  const handleValidation = (e) => {
    const val = e.target.value;
    setUserAnswer(val);

    if (val === '') {
      onVerify(false);
      setHasError(false);
      return;
    }

    let expectedResult = 0;
    if (operator === '+') expectedResult = num1 + num2;
    if (operator === '-') expectedResult = num1 - num2;
    if (operator === '*') expectedResult = num1 * num2;

    if (parseInt(val) === expectedResult) {
      onVerify(true);
      setHasError(false);
    } else {
      onVerify(false);
      setHasError(true);
    }
  };

  const formatNumber = (num, position) => {
    if (displayMode === 1 && position === 1) return numberWords[num] || num;
    if (displayMode === 2 && position === 2) return numberWords[num] || num;
    return num;
  };

  if (!isMounted) return null;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end mb-2">
        <label className="text-xs sm:text-sm font-bold text-muted uppercase tracking-wider flex items-center gap-2">
          <FaShieldAlt className="text-primary" /> Security Check <span className="text-red-500">*</span>
        </label>
        <button 
          type="button" 
          onClick={() => { generateCaptcha(); onVerify(false); }} 
          className="text-muted hover:text-primary transition-colors text-xs flex items-center gap-1 font-semibold"
          title="Reload Captcha"
        >
          <FaSyncAlt /> Reload
        </button>
      </div>

      <div className={`flex gap-3 items-center bg-background border-2 rounded-xl px-2 py-1.5 transition-all focus-within:shadow-md ${hasError && userAnswer !== '' ? 'border-red-500' : 'border-border focus-within:border-primary'}`}>
        <div className="flex-shrink-0 font-black text-sm sm:text-base text-foreground bg-secondary/80 px-4 py-2.5 rounded-lg select-none border border-border tracking-wider">
          {formatNumber(num1, 1)} {operator} {formatNumber(num2, 2)} = ?
        </div>
        <input
          type="number"
          value={userAnswer}
          onChange={handleValidation}
          className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-foreground font-bold text-lg px-2"
          placeholder="Answer"
          required
        />
      </div>
      
      {hasError && userAnswer !== '' && (
        <p className="text-xs text-red-500 font-bold mt-1 animate-pulse">Incorrect answer. Please try again.</p>
      )}
    </div>
  );
}