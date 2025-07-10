
export const useDownload = () => {
  const handleDownload = () => {
    console.log('Download button clicked');
    // Direct navigation to the download link
    window.location.href = 'http://khdame.com/download';
  };

  return { handleDownload };
};
