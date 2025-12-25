/**
 * 프로젝트 이미지 경로 생성
 * @param {string} folder - 프로젝트 폴더명
 * @param {string} image - 이미지 파일명
 * @returns {string} 이미지 경로
 */
export const getProjectImagePath = (folder, image) => {
    return `${process.env.PUBLIC_URL}/projects/${folder}/${image}`;
};

/**
 * 프로필 이미지 경로 생성
 * @param {string} profile - 프로필 이미지 파일명
 * @returns {string} 프로필 이미지 경로
 */
export const getProfilePath = (profile) => {
    return `${process.env.PUBLIC_URL}/${profile}`;
};

/**
 * PDF 파일 경로 생성
 * @param {string} folder - 프로젝트 폴더명
 * @param {string} pdf - PDF 파일명
 * @returns {string} PDF 경로
 */
export const getPdfPath = (folder, pdf) => {
    return `${process.env.PUBLIC_URL}/projects/${folder}/${pdf}`;
};

/**
 * 개발 환경 여부 확인
 * @returns {boolean} 개발 환경이면 true
 */
export const isDevelopment = () => {
    return process.env.NODE_ENV === 'development' || 
           window.location.hostname === 'localhost';
};

/**
 * PDF 뷰어 경로 생성
 * @param {string} folder - 프로젝트 폴더명
 * @param {string} pdf - PDF 파일명
 * @returns {string} PDF 뷰어 경로
 */
export const getPdfViewerPath = (folder, pdf) => {
    const basePath = isDevelopment() ? '' : '*/';
    return `${basePath}pdfviewer/${folder}/${pdf}`;
};