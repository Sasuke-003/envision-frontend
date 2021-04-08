import React from "react";
import "./Title.css";

function Title({ mainTitle = "PAPER PRESENTATION", subTitle = "by CSE Department", isLineNeeded = true, isTopHeading = true }) {
    return (
        // <table className={`title ${isTopHeading ? "title__topHeading" : ""}`}>
        //     <tr>
        //         <td colSpan='2' className={`title__main ${isTopHeading ? "title__main__topHeading" : ""}`}>
        //             <h3>{mainTitle}</h3>
        //         </td>
        //     </tr>
        //     <tr>
        //         <td colSpan='1' className='title__sub'>
        //             <hr
        //                 className={`title__underLine ${isLineNeeded ? "" : "title__underLine__notNeeded"} ${
        //                     isTopHeading ? "title__underLine__topHeading" : ""
        //                 }`}
        //             />
        //             <p className={`title__underText ${isTopHeading ? "title__underText__topHeading" : ""}`}>{subTitle}</p>
        //         </td>
        //     </tr>
        // </table>
        <table className={`title ${isTopHeading ? "title__topHeading" : ""}`}>
            <tr>
                <td colSpan='2'>
                    <h4 className={`title__main ${isTopHeading ? "title__main__topHeading" : ""}`}>{mainTitle}</h4>
                </td>
            </tr>
            <tr>
                <td colSpan='1' className='title__sub'>
                    <hr
                        className={`title__underLine ${isLineNeeded ? "" : "title__underLine__notNeeded"} ${
                            isTopHeading ? "title__underLine__topHeading" : ""
                        }`}
                    />
                    <p className={`title__underText ${isTopHeading ? "title__underText__topHeading" : ""}`}>{subTitle}</p>
                </td>
            </tr>
        </table>
    );
}

export default Title;
