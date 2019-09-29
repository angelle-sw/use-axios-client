/** @jsx jsx */
import React, { useState } from 'react';
import { Global } from '@emotion/core';
import { jsx, Box } from 'theme-ui';
import { useMenus } from 'docz';
import { groupBy } from 'lodash';
import * as styles from './styles';
import { NavLink } from '../NavLink';

export const Sidebar = React.forwardRef((props, ref) => {
  const [query] = useState('');
  const menus = useMenus({ query });
  const menuGroups = groupBy(menus, 'parent');

  return (
    <>
      <Box onClick={props.onClick} sx={styles.overlay(props)}>
        {props.open && <Global styles={styles.global} />}
      </Box>

      <Box ref={ref} sx={styles.wrapper(props)} data-testid="sidebar">
        {Object.entries(menuGroups).map(([parent, menuItems]) => (
          <div key={parent}>
            <div sx={styles.menuHeader}>{parent}</div>

            {menuItems.map(menuItem => (
              <NavLink key={menuItem.id} item={menuItem}>
                {menuItem.name}
              </NavLink>
            ))}
          </div>
        ))}
      </Box>
    </>
  );
});
