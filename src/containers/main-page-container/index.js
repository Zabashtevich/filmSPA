import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { bodyFirstTab, bodySecondaryTab } from "../../constants/constants";
import { BodyMain, CardList, CardListSkeleton } from "../../components";
import { getPaginator, getRightReleasedDate } from "../../utils/utils";
import { range } from "../../utils";
import Data from "../../constants/data.json";
import { useFetch } from "../../hooks";
import { TabContainer } from "../";
import { SliderContainer, PaginationMainPageContainer } from "./auxillary";

export default function MainPageContainer() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const [tabFirst, setTabFirst] = useState({
    title: "Sort by:",
    tabList: bodyFirstTab,
    activeType: 0,
    param: "day",
  });

  const [tabSecondary, setTabSecondary] = useState({
    title: "List type:",
    tabList: bodySecondaryTab,
    activeType: 0,
    param: "all",
  });

  const history = useHistory();
  const location = useLocation();
  const skeletonAmount = range(1, 20);
  const currentPage = getPaginator(location);
  // const [list, loading] = useFetch(
  //   `trending/${tabSecondary.param}`,
  //   tabFirst.param,
  //   [{ page: currentPage }],
  // );
  // TODO FETCH TRENDING DATA
  useEffect(() => {
    setTabFirst((prev) => ({
      ...prev,
      param: bodyFirstTab[tabFirst.activeType]["id"],
    }));
    setTabSecondary((prev) => ({
      ...prev,
      param: bodySecondaryTab[tabSecondary.activeType]["id"],
    }));
  }, [tabFirst.activeType, tabSecondary.activeType]);

  return null;
  // <BodyMain>
  //   <BodyMain.Section>
  //     <SliderContainer
  //       data={Data[sliderIndex]}
  //       setSliderIndex={setSliderIndex}
  //       sliderIndex={sliderIndex}
  //       Data={Data}
  //     />
  //   </BodyMain.Section>
  //   <BodyMain.Section padding="1rem" background="#fff">
  //     <BodyMain.Wrapper>
  //       <BodyMain.Inner>
  //         <TabContainer
  //           title={tabFirst.title}
  //           tabList={tabFirst.tabList}
  //           setActiveType={setTabFirst}
  //           activeType={tabFirst.activeType}
  //         />
  //       </BodyMain.Inner>
  //       <BodyMain.Inner>
  //         <TabContainer
  //           title={tabSecondary.title}
  //           tabList={tabSecondary.tabList}
  //           setActiveType={setTabSecondary}
  //           activeType={tabSecondary.activeType}
  //         />
  //       </BodyMain.Inner>
  //     </BodyMain.Wrapper>
  //     <CardList>
  //       {loading
  //         ? skeletonAmount.map((_) => <CardListSkeleton key={_} />)
  //         : list.results.map((item) => {
  //             return (
  //               <CardList.ItemContainer
  //                 key={item.id}
  //                 onClick={() =>
  //                   history.push(`/details/${item.media_type}/${item.id}`)
  //                 }
  //               >
  //                 {item.poster_path === null ? null : null}
  //                 <CardList.ItemContentWrapper>
  //                   <CardList.ItemImage src={item.poster_path} />
  //                   <CardList.ItemDescriptionInner
  //                     title={item.title || item.name}
  //                     date={getRightReleasedDate(item.release_date)}
  //                   />
  //                 </CardList.ItemContentWrapper>
  //                 <CardList.MetaScore error={item.poster_path ? null : true}>
  //                   {item.vote_average}
  //                 </CardList.MetaScore>
  //               </CardList.ItemContainer>
  //             );
  //           })}
  //     </CardList>
  //     <PaginationMainPageContainer currentPage={currentPage} />
  //   </BodyMain.Section>
  // </BodyMain>
}
