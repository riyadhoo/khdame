
export const useDownload = () => {
  const handleDownload = () => {
    console.log('Download button clicked');
    try {
      window.open('http://khdame.com/download', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening download link:', error);
      // Fallback method
      window.location.href = 'http://khdame.com/download';
    }
  };

  return { handleDownload };
};
