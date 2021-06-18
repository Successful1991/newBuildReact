import React, { useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
// import { useUpdateEffect } from "react-use";
import cn from 'classnames';
import css from './SelectTab.module.scss';
import { Select } from "../UI/Select/Select";
import { TabContent } from "../UI/TabContent/TabContent";

export const SelectTab = () => {
  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    if(scroll) {
      scroll.update();
    }
  });

  const tabs = [
    { title: 'cam1', content: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum incidunt nesciunt repellendus temporibus? Ab aliquid commodi consequatur hic iste laudantium libero, nihil non obcaecati perspiciatis praesentium quae repudiandae sapiente, sunt!'], id: '1' },
    { title: 'cam2', content: ['tab 2  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur assumenda aut consequuntur enim error esse eum iste maiores nulla, omnis quasi quis, reiciendis sapiente sit vel veritatis voluptates? Ab architecto consequuntur culpa delectus eaque facere fugit hic illum in itaque iure modi neque odio omnis placeat, possimus praesentium, provident quae quaerat quam quisquam saepe sapiente soluta veniam veritatis? Commodi corporis cumque ex id illo nam numquam pariatur, quas quisquam sit! Aliquam aliquid corporis eaque error facere quisquam, recusandae suscipit voluptas. Dicta ducimus ex excepturi numquam quisquam. Accusantium corporis ea earum eveniet magni odio ratione repellat repellendus repudiandae ut? Aperiam at, commodi eaque laborum porro quos rem repellat unde. A architecto commodi ducimus ipsum officiis omnis provident quia quos rem.'], id: '2' },
    { title: 'cam3', content: ['tabs 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias architecto aspernatur, aut cupiditate deleniti, dignissimos doloribus et excepturi facere hic inventore itaque iusto laboriosam magnam minima molestias omnis, porro qui quia quis quos recusandae reprehenderit totam unde. Alias autem dolorum ducimus eius eligendi fuga, necessitatibus officia quidem tenetur veniam! Dicta excepturi explicabo labore laborum quo sint ut velit! Aliquam ducimus itaque quos repudiandae? Animi blanditiis dolorum modi, numquam omnis quis similique sunt vero voluptas voluptatem. Aliquid deleniti enim fugit id, inventore ipsam labore maiores minus molestiae natus numquam optio perferendis quia repudiandae rerum sequi, tempora. Consequuntur deserunt dolore, dolorem dolorum eveniet in inventore nam nesciunt nobis nostrum officiis qui soluta voluptatibus! Esse necessitatibus non officia quos saepe suscipit velit. A architecto cupiditate dolorum esse, facilis fuga fugiat id natus nihil quae quia quos, ratione, similique? Ad, dicta dolorum earum hic minus molestiae odio optio quae, quaerat quas quos ratione reiciendis saepe sed sit ut voluptatem. Adipisci cumque dolorum ipsam, molestiae sapiente soluta. Culpa in, voluptatibus? A consectetur deleniti earum expedita facere fugit harum, id ipsa ipsum iste natus, neque nesciunt numquam odio officiis optio quia, quod quos reiciendis repellat reprehenderit sapiente sequi soluta temporibus voluptatum! Accusantium ad aspernatur aut, beatae consequatur cumque distinctio doloremque dolores eaque facere illo ipsam itaque maxime molestiae nemo neque nobis nostrum nulla numquam, officia porro provident quidem reprehenderit repudiandae suscipit ullam velit vero voluptate voluptatem voluptatibus! Dolor dolores eligendi eum minus reprehenderit sed totam. Animi aperiam delectus explicabo neque placeat rerum voluptatum! In, similique.'], id: '3' }
  ];
  const [selectId, setSelectId] = React.useState(tabs[0].id);
  
  const handleChange = (event) => {
    setSelectId(event.target.value);
  };

  return (
    <>
      <Select selectId={selectId} handleChange={handleChange}>
        <optgroup label="outside">
          <option value='1'>camera 1</option>
        </optgroup>
        <optgroup label="inside">
          <option value='2'>camera 2.1</option>
          <option value='3'>camera 2.2</option>
        </optgroup>
      </Select>
      {tabs.map((tab) =>
          <TabContent selectId={selectId} index={tab.id} key={tab.id}>{tab.content}</TabContent>
       )}
    </>
  );
};

SelectTab.propTypes = {};
