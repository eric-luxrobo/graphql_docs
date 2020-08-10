import Category from './category'
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import usePrevious from 'react-use/lib/usePrevious'

import { Link, withPrefix } from 'gatsby'
import { colors } from 'gatsby-theme-apollo-core/src/utils/colors'


//import wpgqlColors from '../../../utils/colors'

const StyledList = styled.ul({
  marginLeft: 0,
  listStyle: 'none',
})

const listItemStyles = {
  color: 'inherit',
  ':hover': {
    opacity: colors.hoverOpacity,
  },
}

const StyledListItem = styled.li({
  fontSize: '1rem',
  lineHeight: 'inherit',
  a: {
    ...listItemStyles,
    textDecoration: 'none',
    '&.active': {
      color: '#5e7ed1',
      pointerEvents: 'none',
    },
  },
})

function getId(title) {
  return withPrefix(title)
}

function isPageSelected(path, pathname) {
  const [a, b] = [withPrefix(path), pathname].map(string =>
    string.replace(/\/$/, '')
  )
  return a === b
}

function isCategorySelected({ path, pages }, pathname) {
  return path
    ? isPageSelected({ path })
    : pages.some(page => isPageSelected(page.path, pathname))
}

function getSidebarState(contents, pathname) {
  const activeCategory = contents.find(category =>
    isCategorySelected(category, pathname)
  )
  if (activeCategory) {
    return { [getId(activeCategory.title)]: true }
  }

  return {}
}

export default function SidebarNav(props) {
  const prevPathname = usePrevious(props.pathname)
  const [state, setState] = useState(
    getSidebarState(props.contents, props.pathname)
  )


  useEffect(() => {
    if (props.pathname !== prevPathname) {
      const category = props.contents.find(({ pages }) =>
        pages.find(page => isPageSelected(page.path, props.pathname))
      )
      if (category) {
        const id = getId(category.title)
        if (!state[id]) {
          setState(prevState => ({
            ...prevState,
            [id]: true,
          }))
        }
      }
    }
  }, [props.contents, props.pathname, prevPathname, state, setState])

  function toggleCategory(title) {
    setState(prevState => {
      const id = getId(title)
      const expanded = !prevState[id]

      if (props.onToggleCategory) {
        props.onToggleCategory(title, expanded)
      }

      return {
        ...prevState,
        [id]: expanded,
      }
    })
  }

  return (
    <Fragment>
      {props.contents.map(({ title, path, pages }, index, array) => {
        const contents = (
          <StyledList>
            {pages.map(page => (
              <StyledListItem key={page.path}>
                {page.anchor ? (
                  <a href={page.path}>{page.title}</a>
                ) : (
                  <Link
                    className={
                      isPageSelected(page.path, props.pathname)
                        ? 'active'
                        : null
                    }
                    to={page.path}
                    onClick={props.onLinkClick}
                  >
                    {page.title}
                  </Link>
                )}
              </StyledListItem>
            ))}
          </StyledList>
        )

        if (!title) {
          return (
            <Fragment key="root">
              {contents} 
            </Fragment>
          )
        }

        return (
          <Category
            key={title}
            title={title}
            path={path}
            isFirst={!index}
            expanded={true}
            active={isCategorySelected({ pages, path }, props.pathname)}
            onClick={props.alwaysExpanded ? null : toggleCategory}
          >
            {contents}
          </Category>
        )
      })}
    </Fragment>
  )
}

SidebarNav.propTypes = {
  alwaysExpanded: PropTypes.bool,
  contents: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onToggleAll: PropTypes.func,
  onToggleCategory: PropTypes.func,
  onLinkClick: PropTypes.func,
}
