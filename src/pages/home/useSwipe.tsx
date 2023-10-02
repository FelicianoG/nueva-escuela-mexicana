import { useState } from "react";

export const useSwipe = () => {
  return [onTouchStart, onTouchMove, onTouchEnd];
};
