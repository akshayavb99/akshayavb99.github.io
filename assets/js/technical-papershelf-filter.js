document.addEventListener("DOMContentLoaded", () => {
  const filterGroup = document.querySelector("[data-resource-filters]");
  const resourceList = document.querySelector("[data-resource-list]");

  if (!filterGroup || !resourceList) return;

  const buttons = Array.from(filterGroup.querySelectorAll("[data-resource-filter]"));
  const resources = Array.from(resourceList.querySelectorAll("[data-resource-type]"));
  const status = filterGroup.querySelector("[data-resource-filter-status]");

  const applyFilter = (selectedType) => {
    let visibleCount = 0;

    resources.forEach((resource) => {
      const shouldShow = selectedType === "all" || resource.dataset.resourceType === selectedType;
      resource.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.resourceFilter === selectedType));
    });

    if (status) {
      const noun = visibleCount === 1 ? "resource" : "resources";
      status.textContent = `Showing ${visibleCount} ${noun}.`;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.resourceFilter));
  });

  applyFilter("all");
});
