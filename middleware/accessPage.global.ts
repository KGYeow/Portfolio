import sidebarItems from '@/data/sidebarItem'

export default defineNuxtRouteMiddleware(async(to, from) => {
  if (to.path.match("/profile")) return
  // Check if the user is authorized to access the requested page
  const isAuthorized = checkAuthorization(sidebarItems, to.path)

  // Redirect to the dashboard if not authorized
  if (!isAuthorized) {
    return navigateTo('/')
  }
})

const filterSidebarItems = (accessPages: any, menuItems: any) => {
  const temp = menuItems.filter((item: any) => {
		if (item.header) {
			return true; // Include header
		}
    if (item.to && (!item.auth || accessPages.includes(item.title))) {
      return true; // Include parent item if it's accessible
    }
		else if (item.children) {
      const filteredChildren = filterSidebarItems(accessPages, item.children);
      if (filteredChildren.length > 0) {
				item.children = filteredChildren; // Update parent item's children with filtered children
        return true; // Include parent item if any child is accessible
      } else {
        return false; // Exclude parent item if no child is accessible
      }
    }
		else {
      return false; // Exclude item if it's not a header, parent, or has children
    }
  })
  return temp.filter((item: any, index: any) => {
		if (item.header != null) {
			const nextItem = temp[index + 1];
			if (!nextItem || !nextItem.title) {
				return false; // Exclude header that does not followed by item 
			}
		}
		return true;
	})
}

const checkAuthorization = (menuItems: any, path: any) => {
  return menuItems.some((item: any) => {
    if (item.to === path) {
      return true
    }
    if (item.children) {
      return checkAuthorization(item.children, path)
    }
    return false
  })
}