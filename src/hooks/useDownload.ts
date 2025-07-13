
export const useDownload = () => {
  const handleDownload = () => {
    console.log('Download button clicked');
    // Open the download link in a new tab
    window.open('http://khdame.com/download', '_blank');
  };

  return { handleDownload };
};
