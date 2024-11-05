// src/components/utilities/i18n/i18n.tsx
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// src/i18n/translations/en.json
var en_default = {
  $schema: "./$schema.json",
  general: {
    ascending: "Ascending",
    descending: "Descending",
    add: "Add",
    start: "Start",
    end: "End",
    open: "Open",
    close: "Close",
    apply: "Apply",
    range: "Range",
    search: "Search",
    of: "of",
    results: "results",
    pages: "pages",
    next: "Next",
    prev: "Prev",
    is: "is",
    timeline: "Timeline",
    success: "Success",
    warning: "Warning",
    tip: "Tip",
    error: "Error",
    select: "Select",
    selected: "Selected",
    enabled: "Enabled",
    disabled: "Disabled",
    expired: "Expired",
    active: "Active",
    revoked: "Revoked",
    new: "New",
    modified: "Modified",
    added: "Added",
    removed: "Removed",
    admin: "Admin",
    store: "Store",
    details: "Details",
    items_one: "{{count}} item",
    items_other: "{{count}} items",
    countSelected: "{{count}} selected",
    countOfTotalSelected: "{{count}} of {{total}} selected",
    plusCount: "+ {{count}}",
    plusCountMore: "+ {{count}} more",
    areYouSure: "Are you sure?",
    noRecordsFound: "No records found",
    typeToConfirm: "Please type {val} to confirm:",
    noResultsTitle: "No results",
    noResultsMessage: "Try changing the filters or search query",
    noSearchResults: "No search results",
    noSearchResultsFor: "No search results for <0>'{{query}}'</0>",
    noRecordsTitle: "No records",
    noRecordsMessage: "There are no records to show",
    unsavedChangesTitle: "Are you sure you want to leave this form?",
    unsavedChangesDescription: "You have unsaved changes that will be lost if you exit this form.",
    includesTaxTooltip: "Prices in this column are tax inclusive.",
    excludesTaxTooltip: "Prices in this column are tax exclusive.",
    noMoreData: "No more data"
  },
  json: {
    header: "JSON",
    numberOfKeys_one: "{{count}} key",
    numberOfKeys_other: "{{count}} keys",
    drawer: {
      header_one: "JSON <0>\xB7 {{count}} key</0>",
      header_other: "JSON <0>\xB7 {{count}} keys</0>",
      description: "View the JSON data for this object."
    }
  },
  metadata: {
    header: "Metadata",
    numberOfKeys_one: "{{count}} key",
    numberOfKeys_other: "{{count}} keys",
    edit: {
      header: "Edit Metadata",
      description: "Edit the metadata for this object.",
      successToast: "Metadata was successfully updated.",
      actions: {
        insertRowAbove: "Insert row above",
        insertRowBelow: "Insert row below",
        deleteRow: "Delete row"
      },
      labels: {
        key: "Key",
        value: "Value"
      },
      complexRow: {
        label: "Some rows are disabled",
        description: "This object contains non-primitive metadata, such as arrays or objects, that can't be edited here. To edit the disabled rows, use the API directly.",
        tooltip: "This row is disabled because it contains non-primitive data."
      }
    }
  },
  validation: {
    mustBeInt: "The value must be a whole number.",
    mustBePositive: "The value must be a positive number."
  },
  actions: {
    save: "Save",
    saveAsDraft: "Save as draft",
    copy: "Copy",
    copied: "Copied",
    duplicate: "Duplicate",
    publish: "Publish",
    create: "Create",
    delete: "Delete",
    remove: "Remove",
    revoke: "Revoke",
    cancel: "Cancel",
    forceConfirm: "Force confirm",
    continueEdit: "Continue edit",
    enable: "Enable",
    disable: "Disable",
    undo: "Undo",
    complete: "Complete",
    viewDetails: "View details",
    back: "Back",
    close: "Close",
    showMore: "Show more",
    continue: "Continue",
    continueWithEmail: "Continue with Email",
    idCopiedToClipboard: "ID copied to clipboard",
    addReason: "Add Reason",
    addNote: "Add Note",
    reset: "Reset",
    confirm: "Confirm",
    edit: "Edit",
    addItems: "Add items",
    download: "Download",
    clear: "Clear",
    clearAll: "Clear all",
    apply: "Apply",
    add: "Add",
    select: "Select",
    browse: "Browse",
    logout: "Logout",
    hide: "Hide",
    export: "Export",
    import: "Import"
  },
  operators: {
    in: "In"
  },
  app: {
    search: {
      label: "Search",
      title: "Search",
      description: "Search your entire store, including orders, products, customers, and more.",
      allAreas: "All areas",
      navigation: "Navigation",
      openResult: "Open result",
      showMore: "Show more",
      placeholder: "Jump to or find anything...",
      noResultsTitle: "No results found",
      noResultsMessage: "We couldn't find anything that matched your search.",
      emptySearchTitle: "Type to search",
      emptySearchMessage: "Enter a keyword or phrase to explore.",
      loadMore: "Load {{count}} more",
      groups: {
        all: "All areas",
        customer: "Customers",
        customerGroup: "Customer Groups",
        product: "Products",
        productVariant: "Product Variants",
        inventory: "Inventory",
        reservation: "Reservations",
        category: "Categories",
        collection: "Collections",
        order: "Orders",
        promotion: "Promotions",
        campaign: "Campaigns",
        priceList: "Price Lists",
        user: "Users",
        region: "Regions",
        taxRegion: "Tax Regions",
        returnReason: "Return Reasons",
        salesChannel: "Sales Channels",
        productType: "Product Types",
        productTag: "Product Tags",
        location: "Locations",
        shippingProfile: "Shipping Profiles",
        publishableApiKey: "Publishable API Keys",
        secretApiKey: "Secret API Keys",
        command: "Commands",
        navigation: "Navigation"
      }
    },
    keyboardShortcuts: {
      pageShortcut: "Jump to",
      settingShortcut: "Settings",
      commandShortcut: "Commands",
      then: "then",
      navigation: {
        goToOrders: "Orders",
        goToProducts: "Products",
        goToCollections: "Collections",
        goToCategories: "Categories",
        goToCustomers: "Customers",
        goToCustomerGroups: "Customer Groups",
        goToInventory: "Inventory",
        goToReservations: "Reservations",
        goToPriceLists: "Price Lists",
        goToPromotions: "Promotions",
        goToCampaigns: "Campaigns"
      },
      settings: {
        goToSettings: "Settings",
        goToStore: "Store",
        goToUsers: "Users",
        goToRegions: "Regions",
        goToTaxRegions: "Tax Regions",
        goToSalesChannels: "Sales Channels",
        goToProductTypes: "Product Types",
        goToLocations: "Locations",
        goToPublishableApiKeys: "Publishable API Keys",
        goToSecretApiKeys: "Secret API Keys",
        goToWorkflows: "Workflows",
        goToProfile: "Profile",
        goToReturnReasons: "Return reasons"
      }
    },
    menus: {
      user: {
        documentation: "Documentation",
        changelog: "Changelog",
        shortcuts: "Shortcuts",
        profileSettings: "Profile settings",
        theme: {
          label: "Theme",
          dark: "Dark",
          light: "Light",
          system: "System"
        }
      },
      store: {
        label: "Store",
        storeSettings: "Store settings"
      },
      actions: {
        logout: "Log out"
      }
    },
    nav: {
      accessibility: {
        title: "Navigation",
        description: "Navigation menu for the dashboard."
      },
      common: {
        extensions: "Extensions"
      },
      main: {
        store: "Store",
        storeSettings: "Store settings"
      },
      settings: {
        header: "Settings",
        general: "General",
        developer: "Developer",
        myAccount: "My Account"
      }
    }
  },
  dataGrid: {
    columns: {
      view: "View",
      resetToDefault: "Reset to default",
      disabled: "Changing which columns are visible is disabled."
    },
    shortcuts: {
      label: "Shortcuts",
      commands: {
        undo: "Undo",
        redo: "Redo",
        copy: "Copy",
        paste: "Paste",
        edit: "Edit",
        delete: "Delete",
        clear: "Clear",
        moveUp: "Move up",
        moveDown: "Move down",
        moveLeft: "Move left",
        moveRight: "Move right",
        moveTop: "Move to top",
        moveBottom: "Move to bottom",
        selectDown: "Select down",
        selectUp: "Select up",
        selectColumnDown: "Select column down",
        selectColumnUp: "Select column up",
        focusToolbar: "Focus toolbar",
        focusCancel: "Focus cancel"
      }
    },
    errors: {
      fixError: "Fix error",
      count_one: "{{count}} error",
      count_other: "{{count}} errors"
    }
  },
  filters: {
    date: {
      today: "Today",
      lastSevenDays: "Last 7 days",
      lastThirtyDays: "Last 30 days",
      lastNinetyDays: "Last 90 days",
      lastTwelveMonths: "Last 12 months",
      custom: "Custom",
      from: "From",
      to: "To"
    },
    compare: {
      lessThan: "Less than",
      greaterThan: "Greater than",
      exact: "Exact",
      range: "Range",
      lessThanLabel: "less than {{value}}",
      greaterThanLabel: "greater than {{value}}",
      andLabel: "and"
    },
    addFilter: "Add filter"
  },
  errorBoundary: {
    badRequestTitle: "400 - Bad request",
    badRequestMessage: "The request could not be understood by the server due to malformed syntax.",
    notFoundTitle: "404 - There is no page at this address",
    notFoundMessage: "Check the URL and try again, or use the search bar to find what you are looking for.",
    internalServerErrorTitle: "500 - Internal server error",
    internalServerErrorMessage: "An unexpected error occurred on the server. Please try again later.",
    defaultTitle: "An error occurred",
    defaultMessage: "An unexpected error occurred while rendering this page.",
    noMatchMessage: "The page you are looking for does not exist.",
    backToDashboard: "Back to dashboard"
  },
  addresses: {
    shippingAddress: {
      header: "Shipping Address",
      editHeader: "Edit Shipping Address",
      editLabel: "Shipping address",
      label: "Shipping address"
    },
    billingAddress: {
      header: "Billing Address",
      editHeader: "Edit Billing Address",
      editLabel: "Billing address",
      label: "Billing address",
      sameAsShipping: "Same as shipping address"
    },
    contactHeading: "Contact",
    locationHeading: "Location"
  },
  email: {
    editHeader: "Edit Email",
    editLabel: "Email",
    label: "Email"
  },
  transferOwnership: {
    header: "Transfer Ownership",
    label: "Transfer ownership",
    details: {
      order: "Order details",
      draft: "Draft details"
    },
    currentOwner: {
      label: "Current owner",
      hint: "The current owner of the order."
    },
    newOwner: {
      label: "New owner",
      hint: "The new owner to transfer the order to."
    },
    validation: {
      mustBeDifferent: "The new owner must be different from the current owner.",
      required: "New owner is required."
    }
  },
  sales_channels: {
    availableIn: "Available in <0>{{x}}</0> of <1>{{y}}</1> sales channels"
  },
  products: {
    domain: "Products",
    list: {
      noRecordsMessage: "Create your first product to start selling."
    },
    create: {
      header: "General",
      tabs: {
        details: "Details",
        organize: "Organize",
        variants: "Variants",
        inventory: "Inventory kits"
      },
      errors: {
        variants: "Please select at least one variant.",
        options: "Please create at least one option.",
        uniqueSku: "SKU must be unique."
      },
      inventory: {
        heading: "Inventory kits",
        label: "Add inventory items to the variant's inventory kit.",
        itemPlaceholder: "Select inventory item",
        quantityPlaceholder: "How many of these are needed for the kit?"
      },
      variants: {
        header: "Variants",
        subHeadingTitle: "Yes, this is a product with variants",
        subHeadingDescription: "When unchecked, we will create a default variant for you",
        optionTitle: {
          placeholder: "Size"
        },
        optionValues: {
          placeholder: "Small, Medium, Large"
        },
        productVariants: {
          label: "Product variants",
          hint: "This ranking will affect the variants' order in your storefront.",
          alert: "Add options to create variants.",
          tip: "Variants left unchecked won't be created. You can always create and edit variants afterwards but this list fits the variations in your product options."
        },
        productOptions: {
          label: "Product options",
          hint: "Define the options for the product, e.g. color, size, etc."
        }
      },
      successToast: "Product {{title}} was successfully created."
    },
    export: {
      header: "Export Product List",
      description: "Export the product list to a CSV file.",
      success: {
        title: "We are processing your export",
        description: "Exporting data may take a few minutes. We will notify you when we are done."
      },
      filters: {
        title: "Filters",
        description: "Apply filters in the table overview to adjust this view"
      },
      columns: {
        title: "Columns",
        description: "Customize the exported data to meet specific needs"
      }
    },
    import: {
      header: "Import Product List",
      uploadLabel: "Import Products",
      uploadHint: "Drag and drop a CSV file or click to upload",
      description: "Import products by providing a CSV file in a pre-defined format",
      template: {
        title: "Unsure about how to arrange your list?",
        description: "Download the template below to ensure you are following the correct format."
      },
      upload: {
        title: "Upload a CSV file",
        description: "Through imports you can add or update products. To update existing products you must use the existing handle and ID, to update existing variants you must use the existing ID. You will be asked for confirmation before we import products.",
        preprocessing: "Preprocessing...",
        productsToCreate: "Products will be created",
        productsToUpdate: "Products will be updated"
      },
      success: {
        title: "We are processing your import",
        description: "Importing data may take a while. We will notify you when we are done."
      }
    },
    deleteWarning: "You are about to delete the product {{title}}. This action cannot be undone.",
    variants: "Variants",
    attributes: "Attributes",
    editProduct: "Edit Product",
    editAttributes: "Edit Attributes",
    editOptions: "Edit Options",
    editPrices: "Edit prices",
    media: {
      label: "Media",
      editHint: "Add media to the product to showcase it in your storefront.",
      makeThumbnail: "Make thumbnail",
      uploadImagesLabel: "Upload images",
      uploadImagesHint: "Drag and drop images here or click to upload.",
      invalidFileType: "'{{name}}' is not a supported file type. Supported file types are: {{types}}.",
      failedToUpload: "Failed to upload the added media. Please try again.",
      deleteWarning_one: "You are about to delete {{count}} image. This action cannot be undone.",
      deleteWarning_other: "You are about to delete {{count}} images. This action cannot be undone.",
      deleteWarningWithThumbnail_one: "You are about to delete {{count}} image including the thumbnail. This action cannot be undone.",
      deleteWarningWithThumbnail_other: "You are about to delete {{count}} images including the thumbnail. This action cannot be undone.",
      thumbnailTooltip: "Thumbnail",
      galleryLabel: "Gallery",
      downloadImageLabel: "Download current image",
      deleteImageLabel: "Delete current image",
      emptyState: {
        header: "No media yet",
        description: "Add media to the product to showcase it in your storefront.",
        action: "Add media"
      }
    },
    discountableHint: "When unchecked, discounts will not be applied to this product.",
    noSalesChannels: "Not available in any sales channels",
    variantCount_one: "{{count}} variant",
    variantCount_other: "{{count}} variants",
    deleteVariantWarning: "You are about to delete the variant {{title}}. This action cannot be undone.",
    productStatus: {
      draft: "Draft",
      published: "Published",
      proposed: "Proposed",
      rejected: "Rejected"
    },
    fields: {
      title: {
        label: "Title",
        hint: "Give your product a short and clear title.<0/>50-60 characters is the recommended length for search engines."
      },
      subtitle: {
        label: "Subtitle"
      },
      handle: {
        label: "Handle",
        tooltip: "The handle is used to reference the product in your storefront. If not specified, the handle will be generated from the product title."
      },
      description: {
        label: "Description",
        hint: "Give your product a short and clear description.<0/>120-160 characters is the recommended length for search engines."
      },
      discountable: {
        label: "Discountable",
        hint: "When unchecked, discounts will not be applied to this product"
      },
      type: {
        label: "Type"
      },
      collection: {
        label: "Collection"
      },
      categories: {
        label: "Categories"
      },
      tags: {
        label: "Tags"
      },
      sales_channels: {
        label: "Sales channels",
        hint: "This product will only be available in the default sales channel if left untouched."
      },
      countryOrigin: {
        label: "Country of origin"
      },
      material: {
        label: "Material"
      },
      width: {
        label: "Width"
      },
      length: {
        label: "Length"
      },
      height: {
        label: "Height"
      },
      weight: {
        label: "Weight"
      },
      options: {
        label: "Product options",
        hint: "Options are used to define the color, size, etc. of the product",
        add: "Add option",
        optionTitle: "Option title",
        optionTitlePlaceholder: "Color",
        variations: "Variations (comma-separated)",
        variantionsPlaceholder: "Red, Blue, Green"
      },
      variants: {
        label: "Product variants",
        hint: "Variants left unchecked won't be created, This ranking will affect how the variants are ranked in your frontend."
      },
      mid_code: {
        label: "Mid code"
      },
      hs_code: {
        label: "HS code"
      }
    },
    variant: {
      edit: {
        header: "Edit Variant",
        success: "Product variant edited sucessfully"
      },
      create: {
        header: "Variant details"
      },
      deleteWarning: "Are you sure you want to delete this variant?",
      pricesPagination: "1 - {{current}} of {{total}} prices",
      tableItemAvailable: "{{availableCount}} available",
      tableItem_one: "{{availableCount}} available at {{locationCount}} location",
      tableItem_other: "{{availableCount}} available at {{locationCount}} locations",
      inventory: {
        notManaged: "Not managed",
        manageItems: "Manage inventory items",
        notManagedDesc: "Inventory is not managed for this variant. Turn on \u2018Manage Inventory\u2019 to track the variant's inventory.",
        manageKit: "Manage inventory kit",
        navigateToItem: "Go to inventory item",
        actions: {
          inventoryItems: "Go to inventory item",
          inventoryKit: "Show inventory items"
        },
        inventoryKit: "Inventory Kit",
        inventoryKitHint: "Does this variant consist of several inventory items?",
        validation: {
          itemId: "Please select inventory item.",
          quantity: "Quantity is required. Please input a positive number."
        },
        header: "Stock & Inventory",
        editItemDetails: "Edit item details",
        manageInventoryLabel: "Manage inventory",
        manageInventoryHint: "When enabled, we'll change the inventory quantity for you when orders and returns are created.",
        allowBackordersLabel: "Allow backorders",
        allowBackordersHint: "When enabled, customers can purchase the variant even if there's no available quantity.",
        toast: {
          levelsBatch: "Inventory levels updated.",
          update: "Inventory item updated successfully.",
          updateLevel: "Inventory level updated successfully.",
          itemsManageSuccess: "Inventory items sucessfully updated."
        }
      }
    },
    options: {
      header: "Options",
      edit: {
        header: "Edit Option",
        successToast: "Option {{title}} was successfully updated."
      },
      create: {
        header: "Create Option",
        successToast: "Option {{title}} was successfully created."
      },
      deleteWarning: "You are about to delete the product option: {{title}}. This action cannot be undone."
    },
    organization: {
      header: "Organize",
      edit: {
        header: "Edit Organization",
        toasts: {
          success: "Successfully updated the organization of {{title}}."
        }
      }
    },
    toasts: {
      delete: {
        success: {
          header: "Product deleted",
          description: "{{title}} was successfully deleted."
        },
        error: {
          header: "Failed to delete product"
        }
      }
    }
  },
  collections: {
    domain: "Collections",
    subtitle: "Organize products into collections.",
    createCollection: "Create Collection",
    createCollectionHint: "Create a new collection to organize your products.",
    createSuccess: "Collection created successfully.",
    editCollection: "Edit Collection",
    handleTooltip: "The handle is used to reference the collection in your storefront. If not specified, the handle will be generated from the collection title.",
    deleteWarning: "You are about to delete the collection {{title}}. This action cannot be undone.",
    removeSingleProductWarning: "You are about to remove the product {{title}} from the collection. This action cannot be undone.",
    removeProductsWarning_one: "You are about to remove {{count}} product from the collection. This action cannot be undone.",
    removeProductsWarning_other: "You are about to remove {{count}} products from the collection. This action cannot be undone.",
    products: {
      list: {
        noRecordsMessage: "There are no products in the collection."
      },
      add: {
        successToast_one: "Product was successfully added to the collection.",
        successToast_other: "Products were successfully added to the collection."
      },
      remove: {
        successToast_one: "Product was successfully removed from the collection.",
        successToast_other: "Products were successfully removed from the collection."
      }
    }
  },
  categories: {
    domain: "Categories",
    subtitle: "Organize products into categories, and manage those categories' ranking and hierarchy.",
    create: {
      header: "Create Category",
      hint: "Create a new category to organize your products.",
      tabs: {
        details: "Details",
        organize: "Organize Ranking"
      },
      successToast: "Category {{name}} was successfully created."
    },
    edit: {
      header: "Edit Category",
      description: "Edit the category to update its details.",
      successToast: "Category was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the category {{name}}. This action cannot be undone.",
      successToast: "Category {{name}} was successfully deleted."
    },
    products: {
      add: {
        disabledTooltip: "The product is already in this category.",
        successToast_one: "Added {{count}} product to the category.",
        successToast_other: "Added {{count}} products to the category."
      },
      remove: {
        confirmation_one: "You are about to remove {{count}} product from the category. This action cannot be undone.",
        confirmation_other: "You are about to remove {{count}} products from the category. This action cannot be undone.",
        successToast_one: "Removed {{count}} product from the category.",
        successToast_other: "Removed {{count}} products from the category."
      },
      list: {
        noRecordsMessage: "There are no products in the category."
      }
    },
    organize: {
      header: "Organize",
      action: "Edit ranking"
    },
    fields: {
      visibility: {
        label: "Visibility",
        internal: "Internal",
        public: "Public"
      },
      status: {
        label: "Status",
        active: "Active",
        inactive: "Inactive"
      },
      path: {
        label: "Path",
        tooltip: "Show the full path of the category."
      },
      children: {
        label: "Children"
      },
      new: {
        label: "New"
      }
    }
  },
  inventory: {
    domain: "Inventory",
    subtitle: "Manage your inventory items",
    reserved: "Reserved",
    available: "Available",
    locationLevels: "Locations",
    associatedVariants: "Associated variants",
    manageLocations: "Manage locations",
    deleteWarning: "You are about to delete an inventory item. This action cannot be undone.",
    editItemDetails: "Edit item details",
    create: {
      title: "Create Inventory Item",
      details: "Details",
      availability: "Availability",
      locations: "Locations",
      attributes: "Attributes",
      requiresShipping: "Requires shipping",
      requiresShippingHint: "Does the inventory item require shipping?",
      successToast: "Inventory item was successfully created."
    },
    reservation: {
      header: "Reservation of {{itemName}}",
      editItemDetails: "Edit reservation",
      lineItemId: "Line item ID",
      orderID: "Order ID",
      description: "Description",
      location: "Location",
      inStockAtLocation: "In stock at this location",
      availableAtLocation: "Available at this location",
      reservedAtLocation: "Reserved at this location",
      reservedAmount: "Reserve amount",
      create: "Create reservation",
      itemToReserve: "Item to reserve",
      quantityPlaceholder: "How much do you want to reserve?",
      descriptionPlaceholder: "What type of reservation is this?",
      successToast: "Reservation was successfully created.",
      updateSuccessToast: "Reservation was successfully updated.",
      deleteSuccessToast: "Reservation was successfully deleted.",
      errors: {
        noAvaliableQuantity: "Stock location doesn't have available quantity.",
        quantityOutOfRange: "Minimum quantity is 1 and maximum quantity is {{max}}"
      }
    },
    toast: {
      updateLocations: "Locations updated successfully.",
      updateLevel: "Inventory level updated successfully.",
      updateItem: "Inventory item updated successfully."
    }
  },
  giftCards: {
    domain: "Gift Cards",
    editGiftCard: "Edit Gift Card",
    createGiftCard: "Create Gift Card",
    createGiftCardHint: "Manually create a gift card that can be used as a payment method in your store.",
    selectRegionFirst: "Select a region first",
    deleteGiftCardWarning: "You are about to delete the gift card {{code}}. This action cannot be undone.",
    balanceHigherThanValue: "The balance cannot be higher than the original amount.",
    balanceLowerThanZero: "The balance cannot be negative.",
    expiryDateHint: "Countries have different laws regarding gift card expiry dates. Make sure to check local regulations before setting an expiry date.",
    regionHint: "Changing the region of the gift card will also change its currency, potentially affecting its monetary value.",
    enabledHint: "Specify if the gift card is enabled or disabled.",
    balance: "Balance",
    currentBalance: "Current balance",
    initialBalance: "Initial balance",
    personalMessage: "Personal message",
    recipient: "Recipient"
  },
  customers: {
    domain: "Customers",
    list: {
      noRecordsMessage: "Your customers will show up here."
    },
    create: {
      header: "Create Customer",
      hint: "Create a new customer and manage their details.",
      successToast: "Customer {{email}} was successfully created."
    },
    groups: {
      label: "Customer groups",
      remove: 'Are you sure you want to remove the customer from "{{name}}" customer group?',
      removeMany: "Are you sure you want to customer from following customer groups: {{groups}}?",
      alreadyAddedTooltip: "The customer is already in this customer group.",
      list: {
        noRecordsMessage: "This customer doesn't belong to any group."
      },
      add: {
        success: "Customer added to: {{groups}}.",
        list: {
          noRecordsMessage: "Please create a customer group first."
        }
      },
      removed: {
        success: "Customer removed from: {{groups}}.",
        list: {
          noRecordsMessage: "Please create a customer group first."
        }
      }
    },
    edit: {
      header: "Edit Customer",
      emailDisabledTooltip: "The email address cannot be changed for registered customers.",
      successToast: "Customer {{email}} was successfully updated."
    },
    delete: {
      title: "Delete Customer",
      description: "You are about to delete the customer {{email}}. This action cannot be undone.",
      successToast: "Customer {{email}} was successfully deleted."
    },
    fields: {
      guest: "Guest",
      registered: "Registered",
      groups: "Groups"
    },
    registered: "Registered",
    guest: "Guest",
    hasAccount: "Has account"
  },
  customerGroups: {
    domain: "Customer Groups",
    subtitle: "Organize customers into groups. Groups can have different promotions and prices.",
    create: {
      header: "Create Customer Group",
      hint: "Create a new customer group to segment your customers.",
      successToast: "Customer group {{name}} was successfully created."
    },
    edit: {
      header: "Edit Customer Group",
      successToast: "Customer group {{name}} was successfully updated."
    },
    delete: {
      title: "Delete Customer Group",
      description: "You are about to delete the customer group {{name}}. This action cannot be undone.",
      successToast: "Customer group {{name}} was successfully deleted."
    },
    customers: {
      alreadyAddedTooltip: "The customer has already been added to the group.",
      add: {
        successToast_one: "Customer was successfully added to the group.",
        successToast_other: "Customers were successfully added to the group.",
        list: {
          noRecordsMessage: "Create a customer first."
        }
      },
      remove: {
        title_one: "Remove customer",
        title_other: "Remove customers",
        description_one: "You are about to remove {{count}} customer from the customer group. This action cannot be undone.",
        description_other: "You are about to remove {{count}} customers from the customer group. This action cannot be undone."
      },
      list: {
        noRecordsMessage: "This group doesn't have customers."
      }
    }
  },
  orders: {
    domain: "Orders",
    claim: "Claim",
    exchange: "Exchange",
    return: "Return",
    cancelWarning: "You are about to cancel the order {{id}}. This action cannot be undone.",
    onDateFromSalesChannel: "{{date}} from {{salesChannel}}",
    list: {
      noRecordsMessage: "Your orders will show up here."
    },
    summary: {
      requestReturn: "Request return",
      allocateItems: "Allocate items",
      editOrder: "Edit order",
      editOrderContinue: "Continue order edit",
      inventoryKit: "Consists of {{count}}x inventory items",
      itemTotal: "Item Total",
      shippingTotal: "Shipping Total",
      discountTotal: "Discount Total",
      taxTotalIncl: "Tax Total (included)",
      itemSubtotal: "Item Subtotal",
      shippingSubtotal: "Shipping Subtotal",
      discountSubtotal: "Discount Subtotal",
      taxTotal: "Tax Total"
    },
    payment: {
      title: "Payments",
      isReadyToBeCaptured: "Payment <0/> is ready to be captured.",
      totalPaidByCustomer: "Total paid by customer",
      capture: "Capture payment",
      capture_short: "Capture",
      refund: "Refund",
      markAsPaid: "Mark as paid",
      statusLabel: "Payment status",
      statusTitle: "Payment Status",
      status: {
        notPaid: "Not paid",
        authorized: "Authorized",
        partiallyAuthorized: "Partially authorized",
        awaiting: "Awaiting",
        captured: "Captured",
        partiallyRefunded: "Partially refunded",
        partiallyCaptured: "Partially captured",
        refunded: "Refunded",
        canceled: "Canceled",
        requiresAction: "Requires action"
      },
      capturePayment: "Payment of {{amount}} will be captured.",
      capturePaymentSuccess: "Payment of {{amount}} successfully captured",
      markAsPaidPayment: "Payment of {{amount}} will be marked as paid.",
      markAsPaidPaymentSuccess: "Payment of {{amount}} successfully marked as paid",
      createRefund: "Create Refund",
      refundPaymentSuccess: "Refund of amount {{amount}} successful",
      createRefundWrongQuantity: "Quantity should be a number between 1 and {{number}}",
      refundAmount: "Refund {{ amount }}",
      paymentLink: "Copy payment link for {{ amount }}",
      selectPaymentToRefund: "Select payment to refund"
    },
    edits: {
      title: "Edit order",
      confirm: "Confirm Edit",
      confirmText: "You are about to confirm an Order Edit. This action cannot be undone.",
      cancel: "Cancel Edit",
      currentItems: "Current items",
      currentItemsDescription: "Adjust item quantity or remove.",
      addItemsDescription: "You can add new items to the order.",
      addItems: "Add items",
      amountPaid: "Amount paid",
      newTotal: "New total",
      differenceDue: "Difference due",
      create: "Edit Order",
      currentTotal: "Current total",
      noteHint: "Add an internal note for the edit",
      cancelSuccessToast: "Order edit canceled",
      createSuccessToast: "Order edit request created",
      activeChangeError: "There is already active order change on the order (return, claim, exchange etc.). Please finish or cancel the change before editing the order.",
      panel: {
        title: "Order edit requested",
        titlePending: "Order edit pending"
      },
      toast: {
        canceledSuccessfully: "Order edit cancelled",
        confirmedSuccessfully: "Order edit confirmed"
      },
      validation: {
        quantityLowerThanFulfillment: "Cannot set quantity to be less then or equal to fulfilled quantity"
      }
    },
    returns: {
      create: "Create Return",
      confirm: "Confirm Return",
      confirmText: "You are about to confirm a Return. This action cannot be undone.",
      inbound: "Inbound",
      outbound: "Outbound",
      sendNotification: "Send notification",
      sendNotificationHint: "Notify customer about return.",
      returnTotal: "Return total",
      inboundTotal: "Inbound total",
      refundAmount: "Refund amount",
      outstandingAmount: "Outstanding amount",
      reason: "Reason",
      reasonHint: "Choose why the customer want to return items.",
      note: "Note",
      noInventoryLevel: "No inventory level",
      noInventoryLevelDesc: "The selected location does not have an inventory level for the selected items. The return can be requested but can\u2019t be received until an inventory level is created for the selected location.",
      noteHint: "You can type freely if you want to specify something.",
      location: "Location",
      locationHint: "Choose which location you want to return the items to.",
      inboundShipping: "Return shipping",
      inboundShippingHint: "Choose which method you want to use.",
      returnableQuantityLabel: "Returnable quantity",
      refundableAmountLabel: "Refundable amount",
      returnRequestedInfo: "{{requestedItemsCount}}x items return requested",
      returnReceivedInfo: "{{requestedItemsCount}}x items return received",
      itemReceived: "Items received",
      returnRequested: "Return requested",
      damagedItemReceived: "Damaged items received",
      damagedItemsReturned: "{{quantity}}x damaged items returned",
      activeChangeError: "There is an active order change in progress on this order. Please finish or discard the change first.",
      cancel: {
        title: "Cancel Return",
        description: "Are you sure you want to cancel the return request?"
      },
      placeholders: {
        noReturnShippingOptions: {
          title: "No return shipping options found",
          hint: "No return shipping options were created for the location. You can create one at <LinkComponent>Location & Shipping</LinkComponent>."
        },
        outboundShippingOptions: {
          title: "No outbound shipping options found",
          hint: "No outbound shipping options were created for the location. You can create one at <LinkComponent>Location & Shipping</LinkComponent>."
        }
      },
      receive: {
        action: "Receive items",
        receiveItems: "{{ returnType }} {{ id }}",
        restockAll: "Restock all items",
        itemsLabel: "Items received",
        title: "Receive items for #{{returnId}}",
        sendNotificationHint: "Notify customer about received return.",
        inventoryWarning: "Please note that we will automatically adjust the inventory levels based on your input above.",
        writeOffInputLabel: "How many of the items are damaged?",
        toast: {
          success: "Return received successfully.",
          errorLargeValue: "Quantity is greater than requested item quantity.",
          errorNegativeValue: "Quantity cannot be a negative value.",
          errorLargeDamagedValue: "Damaged items quantity + non damaged received quantity exceeds total item quantity on the return. Please decrease quantity of non damaged items."
        }
      },
      toast: {
        canceledSuccessfully: "Return canceled successfully",
        confirmedSuccessfully: "Return confirmed successfully"
      },
      panel: {
        title: "Return initiated",
        description: "There is an open return request to be completed"
      }
    },
    claims: {
      create: "Create Claim",
      confirm: "Confirm Claim",
      confirmText: "You are about to confirm a Claim. This action cannot be undone.",
      manage: "Manage Claim",
      outbound: "Outbound",
      outboundItemAdded: "{{itemsCount}}x added through claim",
      outboundTotal: "Outbound total",
      outboundShipping: "Outbound shipping",
      outboundShippingHint: "Choose which method you want to use.",
      refundAmount: "Estimated difference",
      activeChangeError: "There is an active order change on this order. Please finish or discard the previous change.",
      actions: {
        cancelClaim: {
          successToast: "Claim was successfully canceled."
        }
      },
      cancel: {
        title: "Cancel Claim",
        description: "Are you sure you want to cancel the claim?"
      },
      tooltips: {
        onlyReturnShippingOptions: "This list will consist of only return shipping options."
      },
      toast: {
        canceledSuccessfully: "Claim canceled successfully",
        confirmedSuccessfully: "Claim confirmed successfully"
      },
      panel: {
        title: "Claim initiated",
        description: "There is an open claim request to be completed"
      }
    },
    exchanges: {
      create: "Create Exchange",
      manage: "Manage Exchange",
      confirm: "Confirm Exchange",
      confirmText: "You are about to confirm an Exchange. This action cannot be undone.",
      outbound: "Outbound",
      outboundItemAdded: "{{itemsCount}}x added through exchange",
      outboundTotal: "Outbound total",
      outboundShipping: "Outbound shipping",
      outboundShippingHint: "Choose which method you want to use.",
      refundAmount: "Estimated difference",
      activeChangeError: "There is an active order change on this order. Please finish or discard the previous change.",
      actions: {
        cancelExchange: {
          successToast: "Exchange was successfully canceled."
        }
      },
      cancel: {
        title: "Cancel Exchange",
        description: "Are you sure you want to cancel the exchange?"
      },
      tooltips: {
        onlyReturnShippingOptions: "This list will consist of only return shipping options."
      },
      toast: {
        canceledSuccessfully: "Exchange canceled successfully",
        confirmedSuccessfully: "Exchange confirmed successfully"
      },
      panel: {
        title: "Exchange initiated",
        description: "There is an open exchange request to be completed"
      }
    },
    reservations: {
      allocatedLabel: "Allocated",
      notAllocatedLabel: "Not allocated"
    },
    allocateItems: {
      action: "Allocate items",
      title: "Allocate order items",
      locationDescription: "Choose which location you want to allocate from.",
      itemsToAllocate: "Items to allocate",
      itemsToAllocateDesc: "Select the number of items you wish to allocate",
      search: "Search items",
      consistsOf: "Consists of {{num}}x inventory items",
      requires: "Requires {{num}} per variant",
      toast: {
        created: "Items successfully allocated"
      },
      error: {
        quantityNotAllocated: "There are unallocated items."
      }
    },
    shipment: {
      title: "Mark fulfillment shipped",
      trackingNumber: "Tracking number",
      addTracking: "Add tracking number",
      sendNotification: "Send notification",
      sendNotificationHint: "Notify the customer about this shipment.",
      toastCreated: "Shipment created successfully."
    },
    fulfillment: {
      cancelWarning: "You are about to cancel a fulfillment. This action cannot be undone.",
      markAsDeliveredWarning: "You are about to mark fulfillment as delivered. This action cannot be undone.",
      unfulfilledItems: "Unfulfilled Items",
      statusLabel: "Fulfillment status",
      statusTitle: "Fulfillment Status",
      fulfillItems: "Fulfill items",
      awaitingFulfillmentBadge: "Awaiting fulfillment",
      requiresShipping: "Requires shipping",
      number: "Fulfillment #{{number}}",
      itemsToFulfill: "Items to fulfill",
      create: "Create Fulfillment",
      available: "Available",
      inStock: "In stock",
      markAsShipped: "Mark as shipped",
      markAsDelivered: "Mark as delivered",
      itemsToFulfillDesc: "Choose items and quantities to fulfill",
      locationDescription: "Choose which location you want to fulfill items from.",
      sendNotificationHint: "Notify customers about the created fulfillment.",
      methodDescription: "Choose a different shipping method from the one customer selected",
      error: {
        wrongQuantity: "Only one item is available for fulfillment",
        wrongQuantity_other: "Quantity should be a number between 1 and {{number}}",
        noItems: "No items to fulfill."
      },
      status: {
        notFulfilled: "Not fulfilled",
        partiallyFulfilled: "Partially fulfilled",
        fulfilled: "Fulfilled",
        partiallyShipped: "Partially shipped",
        shipped: "Shipped",
        delivered: "Delivered",
        partiallyDelivered: "Partially delivered",
        partiallyReturned: "Partially returned",
        returned: "Returned",
        canceled: "Canceled",
        requiresAction: "Requires action"
      },
      toast: {
        created: "Fulfillment created successfully",
        canceled: "Fulfillment successfully canceled",
        fulfillmentShipped: "Cannot cancel an already shipped fulfillment",
        fulfillmentDelivered: "Fulfillment marked as delivered successfully"
      },
      trackingLabel: "Tracking",
      shippingFromLabel: "Shipping from",
      itemsLabel: "Items"
    },
    refund: {
      title: "Create Refund",
      sendNotificationHint: "Notify customers about the created refund.",
      systemPayment: "System payment",
      systemPaymentDesc: "One or more of your payments is a system payment. Be aware, that captures and refunds are not handled by Medusa for such payments.",
      error: {
        amountToLarge: "Cannot refund more than the original order amount.",
        amountNegative: "Refund amount must be a positive number.",
        reasonRequired: "Please select a refund reason."
      }
    },
    customer: {
      contactLabel: "Contact",
      editEmail: "Edit email",
      transferOwnership: "Transfer ownership",
      editBillingAddress: "Edit billing address",
      editShippingAddress: "Edit shipping address"
    },
    activity: {
      header: "Activity",
      showMoreActivities_one: "Show {{count}} more activity",
      showMoreActivities_other: "Show {{count}} more activities",
      comment: {
        label: "Comment",
        placeholder: "Leave a comment",
        addButtonText: "Add comment",
        deleteButtonText: "Delete comment"
      },
      events: {
        common: {
          toReturn: "To return",
          toSend: "To send"
        },
        placed: {
          title: "Order placed",
          fromSalesChannel: "from {{salesChannel}}"
        },
        canceled: {
          title: "Order canceled"
        },
        payment: {
          awaiting: "Awaiting payment",
          captured: "Payment captured",
          canceled: "Payment canceled",
          refunded: "Payment refunded"
        },
        fulfillment: {
          created: "Items fulfilled",
          canceled: "Fulfillment canceled",
          shipped: "Items shipped",
          delivered: "Items delivered",
          items_one: "{{count}} item",
          items_other: "{{count}} items"
        },
        return: {
          created: "Return #{{returnId}} requested",
          canceled: "Return #{{returnId}} canceled",
          received: "Return #{{returnId}} received",
          items_one: "{{count}} item returned",
          items_other: "{{count}} items returned"
        },
        note: {
          comment: "Comment",
          byLine: "by {{author}}"
        },
        claim: {
          created: "Claim #{{claimId}} requested",
          canceled: "Claim #{{claimId}} canceled",
          itemsInbound: "{{count}} item to return",
          itemsOutbound: "{{count}} item to send"
        },
        exchange: {
          created: "Exchange #{{exchangeId}} requested",
          canceled: "Exchange #{{exchangeId}} canceled",
          itemsInbound: "{{count}} item to return",
          itemsOutbound: "{{count}} item to send"
        },
        edit: {
          requested: "Order edit #{{editId}} requested",
          confirmed: "Order edit #{{editId}} confirmed"
        }
      }
    },
    fields: {
      displayId: "Display ID",
      refundableAmount: "Refundable amount",
      returnableQuantity: "Returnable quantity"
    }
  },
  draftOrders: {
    domain: "Draft Orders",
    deleteWarning: "You are about to delete the draft order {{id}}. This action cannot be undone.",
    paymentLinkLabel: "Payment link",
    cartIdLabel: "Cart ID",
    markAsPaid: {
      label: "Mark as paid",
      warningTitle: "Mark as Paid",
      warningDescription: "You are about to mark the draft order as paid. This action cannot be undone, and collecting payment will not be possible later."
    },
    status: {
      open: "Open",
      completed: "Completed"
    },
    create: {
      createDraftOrder: "Create Draft Order",
      createDraftOrderHint: "Create a new draft order to manage the details of an order before it is placed.",
      chooseRegionHint: "Choose region",
      existingItemsLabel: "Existing items",
      existingItemsHint: "Add existing products to the draft order.",
      customItemsLabel: "Custom items",
      customItemsHint: "Add custom items to the draft order.",
      addExistingItemsAction: "Add existing items",
      addCustomItemAction: "Add custom item",
      noCustomItemsAddedLabel: "No custom items added yet",
      noExistingItemsAddedLabel: "No existing items added yet",
      chooseRegionTooltip: "Choose a region first",
      useExistingCustomerLabel: "Use existing customer",
      addShippingMethodsAction: "Add shipping methods",
      unitPriceOverrideLabel: "Unit price override",
      shippingOptionLabel: "Shipping option",
      shippingOptionHint: "Choose the shipping option for the draft order.",
      shippingPriceOverrideLabel: "Shipping price override",
      shippingPriceOverrideHint: "Override the shipping price for the draft order.",
      sendNotificationLabel: "Send notification",
      sendNotificationHint: "Send a notification to the customer when the draft order is created."
    },
    validation: {
      requiredEmailOrCustomer: "Email or customer is required.",
      requiredItems: "At least one item is required.",
      invalidEmail: "Email must be a valid email address."
    }
  },
  stockLocations: {
    domain: "Locations & Shipping",
    list: {
      description: "Manage your store's stock locations and shipping options."
    },
    create: {
      header: "Create Stock Location",
      hint: "A stock location is a physical site where products are stored and shipped from.",
      successToast: "Location {{name}} was successfully created."
    },
    edit: {
      header: "Edit Stock Location",
      viewInventory: "View inventory",
      successToast: "Location {{name}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the stock location {{name}}. This action cannot be undone."
    },
    fulfillmentProviders: {
      header: "Fulfillment Providers",
      shippingOptionsTooltip: "This dropdown will only consist of providers enabled for this location. Add them to the location if the dropdown is disabled.",
      label: "Connected fulfillment providers",
      connectedTo: "Connected to {{count}} of {{total}} fulfillment providers",
      noProviders: "This Stock Location is not connected to any fulfillment providers.",
      action: "Connect Providers",
      successToast: "Fulfillment providers for stock location were successfully updated."
    },
    fulfillmentSets: {
      pickup: {
        header: "Pickup"
      },
      shipping: {
        header: "Shipping"
      },
      disable: {
        confirmation: "Are you sure that you want to disable {{name}}? This will delete all associated service zones and shipping options, and cannot be undone.",
        pickup: "Pickup was successfully disabled.",
        shipping: "Shipping was successfully disabled."
      },
      enable: {
        pickup: "Pickup was successfully enabled.",
        shipping: "Shipping was successfully enabled."
      }
    },
    sidebar: {
      header: "Shipping Configuration",
      shippingProfiles: {
        label: "Shipping Profiles",
        description: "Group products by shipping requirements"
      }
    },
    salesChannels: {
      header: "Sales Channels",
      label: "Connected sales channels",
      connectedTo: "Connected to {{count}} of {{total}} sales channels",
      noChannels: "The location is not connected to any sales channels.",
      action: "Connect sales channels",
      successToast: "Sales channels were successfully updated."
    },
    shippingOptions: {
      create: {
        shipping: {
          header: "Create Shipping Option for {{zone}}",
          hint: "Create a new shipping option to define how products are shipped from this location.",
          label: "Shipping options",
          successToast: "Shipping option {{name}} was successfully created."
        },
        returns: {
          header: "Create a Return Option for {{zone}}",
          hint: "Create a new return option to define how products are returned to this location.",
          label: "Return options",
          successToast: "Return option {{name}} was successfully created."
        },
        tabs: {
          details: "Details",
          prices: "Prices"
        },
        action: "Create option"
      },
      delete: {
        confirmation: "You are about to delete the shipping option {{name}}. This action cannot be undone.",
        successToast: "Shipping option {{name}} was successfully deleted."
      },
      edit: {
        header: "Edit Shipping Option",
        action: "Edit option",
        successToast: "Shipping option {{name}} was successfully updated."
      },
      pricing: {
        action: "Edit prices"
      },
      fields: {
        count: {
          shipping_one: "{{count}} shipping option",
          shipping_other: "{{count}} shipping options",
          returns_one: "{{count}} return option",
          returns_other: "{{count}} return options"
        },
        priceType: {
          label: "Price type",
          options: {
            fixed: {
              label: "Fixed",
              hint: "The shipping option's price is fixed and does not change based on the order's contents."
            },
            calculated: {
              label: "Calculated",
              hint: "The shipping option's price is calculated by the fulfillment provider during checkout."
            }
          }
        },
        enableInStore: {
          label: "Enable in store",
          hint: "Whether customers can use this option during checkout."
        },
        provider: "Fulfillment provider",
        profile: "Shipping profile"
      }
    },
    serviceZones: {
      create: {
        headerPickup: "Create Service Zone for Pickup from {{location}}",
        headerShipping: "Create Service Zone for Shipping from {{location}}",
        action: "Create service zone",
        successToast: "Service zone {{name}} was successfully created."
      },
      edit: {
        header: "Edit Service Zone",
        successToast: "Service zone {{name}} was successfully updated."
      },
      delete: {
        confirmation: "You are about to delete the service zone {{name}}. This action cannot be undone.",
        successToast: "Service zone {{name}} was successfully deleted."
      },
      manageAreas: {
        header: "Manage Areas for {{name}}",
        action: "Manage areas",
        label: "Areas",
        hint: "Select the geographical areas that the service zone covers.",
        successToast: "Areas for {{name}} were successfully updated."
      },
      fields: {
        noRecords: "There are no service zones to add shipping options to.",
        tip: "A service zone is a collection of geographical zones or areas. It's used to restrict available shipping options to a defined set of locations."
      }
    }
  },
  shippingProfile: {
    domain: "Shipping Profiles",
    subtitle: "Group products with similar shipping requirements into profiles.",
    create: {
      header: "Create Shipping Profile",
      hint: "Create a new shipping profile to group products with similar shipping requirements.",
      successToast: "Shipping profile {{name}} was successfully created."
    },
    delete: {
      title: "Delete Shipping Profile",
      description: "You are about to delete the shipping profile {{name}}. This action cannot be undone.",
      successToast: "Shipping profile {{name}} was successfully deleted."
    },
    tooltip: {
      type: "Enter shipping profile type, for example: Heavy, Oversized, Freight-only, etc."
    }
  },
  taxRegions: {
    domain: "Tax Regions",
    list: {
      hint: "Manage what you charge your customers when they shop from different countries and regions."
    },
    delete: {
      confirmation: "You are about to delete a tax region. This action cannot be undone.",
      successToast: "The tax region was successfully deleted."
    },
    create: {
      header: "Create Tax Region",
      hint: "Create a new tax region to define tax rates for a specific country.",
      errors: {
        rateIsRequired: "Tax rate is required when creating a default tax rate.",
        nameIsRequired: "Name is required when creating a default tax rate."
      },
      successToast: "The tax region was successfully created."
    },
    province: {
      header: "Provinces",
      create: {
        header: "Create Province Tax Region",
        hint: "Create a new tax region to define tax rates for a specific province."
      }
    },
    state: {
      header: "States",
      create: {
        header: "Create State Tax Region",
        hint: "Create a new tax region to define tax rates for a specific state."
      }
    },
    stateOrTerritory: {
      header: "States or Territories",
      create: {
        header: "Create State/Territory Tax Region",
        hint: "Create a new tax region to define tax rates for a specific state/territory."
      }
    },
    county: {
      header: "Counties",
      create: {
        header: "Create County Tax Region",
        hint: "Create a new tax region to define tax rates for a specific county."
      }
    },
    region: {
      header: "Regions",
      create: {
        header: "Create Region Tax Region",
        hint: "Create a new tax region to define tax rates for a specific region."
      }
    },
    department: {
      header: "Departments",
      create: {
        header: "Create Department Tax Region",
        hint: "Create a new tax region to define tax rates for a specific department."
      }
    },
    territory: {
      header: "Territories",
      create: {
        header: "Create Territory Tax Region",
        hint: "Create a new tax region to define tax rates for a specific territory."
      }
    },
    prefecture: {
      header: "Prefectures",
      create: {
        header: "Create Prefecture Tax Region",
        hint: "Create a new tax region to define tax rates for a specific prefecture."
      }
    },
    district: {
      header: "Districts",
      create: {
        header: "Create District Tax Region",
        hint: "Create a new tax region to define tax rates for a specific district."
      }
    },
    governorate: {
      header: "Governorates",
      create: {
        header: "Create Governorate Tax Region",
        hint: "Create a new tax region to define tax rates for a specific governorate."
      }
    },
    canton: {
      header: "Cantons",
      create: {
        header: "Create Canton Tax Region",
        hint: "Create a new tax region to define tax rates for a specific canton."
      }
    },
    emirate: {
      header: "Emirates",
      create: {
        header: "Create Emirate Tax Region",
        hint: "Create a new tax region to define tax rates for a specific emirate."
      }
    },
    sublevel: {
      header: "Sublevels",
      create: {
        header: "Create Sublevel Tax Region",
        hint: "Create a new tax region to define tax rates for a specific sublevel."
      }
    },
    taxOverrides: {
      header: "Overrides",
      create: {
        header: "Create Override",
        hint: "Create a tax rate that overrides the default tax rates for selected conditions."
      },
      edit: {
        header: "Edit Override",
        hint: "Edit the tax rate that overrides the default tax rates for selected conditions."
      }
    },
    taxRates: {
      create: {
        header: "Create Tax Rate",
        hint: "Create a new tax rate to define the tax rate for a region.",
        successToast: "Tax rate was successfully created."
      },
      edit: {
        header: "Edit Tax Rate",
        hint: "Edit the tax rate to define the tax rate for a region.",
        successToast: "Tax rate was successfully updated."
      },
      delete: {
        confirmation: "You are about to delete the tax rate {{name}}. This action cannot be undone.",
        successToast: "Tax rate was successfully deleted."
      }
    },
    fields: {
      isCombinable: {
        label: "Combinable",
        hint: "Whether this tax rate can be combined with the default rate from the tax region.",
        true: "Combinable",
        false: "Not combinable"
      },
      defaultTaxRate: {
        label: "Default tax rate",
        tooltip: "The default tax rate for this region. An example is the standard VAT rate for a country or region.",
        action: "Create default tax rate"
      },
      taxRate: "Tax rate",
      taxCode: "Tax code",
      targets: {
        label: "Targets",
        hint: "Select the targets that this tax rate will apply to.",
        options: {
          product: "Products",
          productCollection: "Product collections",
          productTag: "Product tags",
          productType: "Product types",
          customerGroup: "Customer groups"
        },
        operators: {
          in: "in",
          on: "on",
          and: "and"
        },
        placeholders: {
          product: "Search for products",
          productCollection: "Search for product collections",
          productTag: "Search for product tags",
          productType: "Search for product types",
          customerGroup: "Search for customer groups"
        },
        tags: {
          product: "Product",
          productCollection: "Product collection",
          productTag: "Product tag",
          productType: "Product type",
          customerGroup: "Customer group"
        },
        modal: {
          header: "Add targets"
        },
        values_one: "{{count}} value",
        values_other: "{{count}} values",
        numberOfTargets_one: "{{count}} target",
        numberOfTargets_other: "{{count}} targets",
        additionalValues_one: "and {{count}} more value",
        additionalValues_other: "and {{count}} more values",
        action: "Add target"
      },
      sublevels: {
        labels: {
          province: "Province",
          state: "State",
          region: "Region",
          stateOrTerritory: "State/Territory",
          department: "Department",
          county: "County",
          territory: "Territory",
          prefecture: "Prefecture",
          district: "District",
          governorate: "Governorate",
          emirate: "Emirate",
          canton: "Canton",
          sublevel: "Sublevel code"
        },
        placeholders: {
          province: "Select province",
          state: "Select state",
          region: "Select region",
          stateOrTerritory: "Select state/territory",
          department: "Select department",
          county: "Select county",
          territory: "Select territory",
          prefecture: "Select prefecture",
          district: "Select district",
          governorate: "Select governorate",
          emirate: "Select emirate",
          canton: "Select canton"
        },
        tooltips: {
          sublevel: "Enter the ISO 3166-2 code for the sublevel tax region.",
          notPartOfCountry: "{{province}} does not appear to be part of {{country}}. Please double-check if this is correct."
        },
        alert: {
          header: "Sublevel regions are disabled for this tax region",
          description: "Sublevel regions are disabled for this region by default. You can enable them to create sublevel regions like provinces, states, or territories.",
          action: "Enable sublevel regions"
        }
      },
      noDefaultRate: {
        label: "No default rate",
        tooltip: "This tax region does not have a default tax rate. If there is a standard rate, such as a country's VAT, please add it to this region."
      }
    }
  },
  promotions: {
    domain: "Promotions",
    sections: {
      details: "Promotion Details"
    },
    tabs: {
      template: "Type",
      details: "Details",
      campaign: "Campaign"
    },
    fields: {
      type: "Type",
      value_type: "Value Type",
      value: "Value",
      campaign: "Campaign",
      method: "Method",
      allocation: "Allocation",
      addCondition: "Add condition",
      clearAll: "Clear all",
      amount: {
        tooltip: "Select the currency code to enable setting the amount"
      },
      conditions: {
        rules: {
          title: "Who can use this code?",
          description: "Which customer is allowed to use the promotion code? Promotion code can be used by all customers if left untouched."
        },
        "target-rules": {
          title: "What items will the promotion be applied to?",
          description: "The promotion will be applied to items that match the following conditions."
        },
        "buy-rules": {
          title: "What needs to be in the cart to unlock the promotion?",
          description: "If these conditions match, we enable the promotion on the target items."
        }
      }
    },
    tooltips: {
      campaignType: "The currency code must be selected in the promotion to set a spend budget."
    },
    errors: {
      requiredField: "Required field",
      promotionTabError: "Fix errors in Promotion Tab before proceeding"
    },
    toasts: {
      promotionCreateSuccess: "Promotion ({{code}}) was successfully created."
    },
    create: {},
    edit: {
      title: "Edit Promotion Details",
      rules: {
        title: "Edit usage conditions"
      },
      "target-rules": {
        title: "Edit item conditions"
      },
      "buy-rules": {
        title: "Edit buy rules"
      }
    },
    campaign: {
      header: "Campaign",
      edit: {
        header: "Edit Campaign",
        successToast: "Successfully updated the campaign of the promotion."
      },
      actions: {
        goToCampaign: "Go to campaign"
      }
    },
    campaign_currency: {
      tooltip: "This is the promotion's currency. Change it from the Details tab."
    },
    form: {
      required: "Required",
      and: "AND",
      selectAttribute: "Select Attribute",
      campaign: {
        existing: {
          title: "Existing Campaign",
          description: "Add promotion to an existing campaign.",
          placeholder: {
            title: "No existing campaigns",
            desc: "You can create one to track multiple promotions and set budget limits."
          }
        },
        new: {
          title: "New Campaign",
          description: "Create a new campaign for this promotion."
        },
        none: {
          title: "Without Campaign",
          description: "Proceed without associating promotion with campaign"
        }
      },
      status: {
        title: "Status"
      },
      method: {
        label: "Method",
        code: {
          title: "Promotion code",
          description: "Customers must enter this code at checkout"
        },
        automatic: {
          title: "Automatic",
          description: "Customers will see this promotion at checkout"
        }
      },
      max_quantity: {
        title: "Maximum Quantity",
        description: "Maximum quantity of items this promotion applies to."
      },
      type: {
        standard: {
          title: "Standard",
          description: "A standard promotion"
        },
        buyget: {
          title: "Buy Get",
          description: "Buy X get Y promotion"
        }
      },
      allocation: {
        each: {
          title: "Each",
          description: "Applies value on each item"
        },
        across: {
          title: "Across",
          description: "Applies value across items"
        }
      },
      code: {
        title: "Code",
        description: "The code your customers will enter during checkout."
      },
      value: {
        title: "Promotion Value"
      },
      value_type: {
        fixed: {
          title: "Promotion Value",
          description: "The amount to be discounted. eg. 100"
        },
        percentage: {
          title: "Promotion Value",
          description: "The percentage to discount off the amount. eg. 8%"
        }
      }
    },
    deleteWarning: "You are about to delete the promotion {{code}}. This action cannot be undone.",
    createPromotionTitle: "Create Promotion",
    type: "Promotion type",
    conditions: {
      add: "Add condition",
      list: {
        noRecordsMessage: "Add a condition to restrict what items the promotion applies to."
      }
    }
  },
  campaigns: {
    domain: "Campaigns",
    details: "Campaign details",
    status: {
      active: "Active",
      expired: "Expired",
      scheduled: "Scheduled"
    },
    delete: {
      title: "Are you sure?",
      description: "You are about to delete the campaign '{{name}}'. This action cannot be undone.",
      successToast: "Campaign '{{name}}' was successfully created."
    },
    edit: {
      header: "Edit Campaign",
      description: "Edit the details of the campaign.",
      successToast: "Campaign '{{name}}' was successfully updated."
    },
    configuration: {
      header: "Configuration",
      edit: {
        header: "Edit Campaign Configuration",
        description: "Edit the configuration of the campaign.",
        successToast: "Campaign configuration was successfully updated."
      }
    },
    create: {
      title: "Create Campaign",
      description: "Create a promotional campaign.",
      hint: "Create a promotional campaign.",
      header: "Create Campaign",
      successToast: "Campaign '{{name}}' was successfully created."
    },
    fields: {
      name: "Name",
      identifier: "Identifier",
      start_date: "Start date",
      end_date: "End date",
      total_spend: "Budget spent",
      total_used: "Budget used",
      budget_limit: "Budget limit",
      campaign_id: {
        hint: "Only campaigns with the same currency code as the promotion are shown in this list."
      }
    },
    budget: {
      create: {
        hint: "Create a budget for the campaign.",
        header: "Campaign Budget"
      },
      details: "Campaign budget",
      fields: {
        type: "Type",
        currency: "Currency",
        limit: "Limit",
        used: "Used"
      },
      type: {
        spend: {
          title: "Spend",
          description: "Set a limit on the total discounted amount of all promotion usages."
        },
        usage: {
          title: "Usage",
          description: "Set a limit on how many times the promotion can be used."
        }
      },
      edit: {
        header: "Edit Campaign Budget"
      }
    },
    promotions: {
      remove: {
        title: "Remove promotion from campaign",
        description: "You are about to remove {{count}} promotion(s) from the campaign. This action cannot be undone."
      },
      alreadyAdded: "This promotion has already been added to the campaign.",
      alreadyAddedDiffCampaign: "This promotion has already been added to a different campaign ({{name}}).",
      currencyMismatch: "Currency of the promotion and campaign doesn't match",
      toast: {
        success: "Successfully added {{count}} promotion(s) to campaign"
      },
      add: {
        list: {
          noRecordsMessage: "Create a promotion first."
        }
      },
      list: {
        noRecordsMessage: "There are no promotions in the campaign."
      }
    },
    deleteCampaignWarning: "You are about to delete the campaign {{name}}. This action cannot be undone.",
    totalSpend: "<0>{{amount}}</0> <1>{{currency}}</1>"
  },
  priceLists: {
    domain: "Price Lists",
    subtitle: "Create sales or override prices for specific conditions.",
    delete: {
      confirmation: "You are about to delete the price list {{title}}. This action cannot be undone.",
      successToast: "Price list {{title}} was successfully deleted."
    },
    create: {
      header: "Create Price List",
      subheader: "Create a new price list to manage the prices of your products.",
      tabs: {
        details: "Details",
        products: "Products",
        prices: "Prices"
      },
      successToast: "Price list {{title}} was successfully created.",
      products: {
        list: {
          noRecordsMessage: "Create a product first."
        }
      }
    },
    edit: {
      header: "Edit Price List",
      successToast: "Price list {{title}} was successfully updated."
    },
    configuration: {
      header: "Configuration",
      edit: {
        header: "Edit Price List Configuration",
        description: "Edit the configuration of the price list.",
        successToast: "Price list configuration was successfully updated."
      }
    },
    products: {
      header: "Products",
      actions: {
        addProducts: "Add products",
        editPrices: "Edit prices"
      },
      delete: {
        confirmation_one: "You are about to delete the prices for {{count}} product in the price list. This action cannot be undone.",
        confirmation_other: "You are about to delete the prices for {{count}} products in the price list. This action cannot be undone.",
        successToast_one: "Successfully deleted prices for {{count}} product.",
        successToast_other: "Successfully deleted prices for {{count}} products."
      },
      add: {
        successToast: "Prices were successfully added to the price list."
      },
      edit: {
        successToast: "Prices were successfully updated."
      }
    },
    fields: {
      priceOverrides: {
        label: "Price overrides",
        header: "Price Overrides"
      },
      status: {
        label: "Status",
        options: {
          active: "Active",
          draft: "Draft",
          expired: "Expired",
          scheduled: "Scheduled"
        }
      },
      type: {
        label: "Type",
        hint: "Choose the type of price list you want to create.",
        options: {
          sale: {
            label: "Sale",
            description: "Sale prices are temporary price changes for products."
          },
          override: {
            label: "Override",
            description: "Overrides are usually used to create customer-specific prices."
          }
        }
      },
      startsAt: {
        label: "Price list has a start date?",
        hint: "Schedule the price list to activate in the future."
      },
      endsAt: {
        label: "Price list has an expiry date?",
        hint: "Schedule the price list to deactivate in the future."
      },
      customerAvailability: {
        header: "Choose customer groups",
        label: "Customer availability",
        hint: "Choose which customer groups the price list should be applied to.",
        placeholder: "Search for customer groups",
        attribute: "Customer groups"
      }
    }
  },
  profile: {
    domain: "Profile",
    manageYourProfileDetails: "Manage your profile details.",
    fields: {
      languageLabel: "Language",
      usageInsightsLabel: "Usage insights"
    },
    edit: {
      header: "Edit Profile",
      languageHint: "The language you want to use in the admin dashboard. This doesn't change the language of your store.",
      languagePlaceholder: "Select language",
      usageInsightsHint: "Share usage insights and help us improve Medusa. You can read more about what we collect and how we use it in our <0>documentation</0>."
    },
    toast: {
      edit: "Profiles changes saved"
    }
  },
  users: {
    domain: "Users",
    editUser: "Edit User",
    inviteUser: "Invite User",
    inviteUserHint: "Invite a new user to your store.",
    sendInvite: "Send invite",
    pendingInvites: "Pending Invites",
    deleteInviteWarning: "You are about to delete the invite for {{email}}. This action cannot be undone.",
    resendInvite: "Resend invite",
    copyInviteLink: "Copy invite link",
    expiredOnDate: "Expired on {{date}}",
    validFromUntil: "Valid from <0>{{from}}</0> - <1>{{until}}</1>",
    acceptedOnDate: "Accepted on {{date}}",
    inviteStatus: {
      accepted: "Accepted",
      pending: "Pending",
      expired: "Expired"
    },
    roles: {
      admin: "Admin",
      developer: "Developer",
      member: "Member"
    },
    deleteUserWarning: "You are about to delete the user {{name}}. This action cannot be undone.",
    invite: "Invite"
  },
  store: {
    domain: "Store",
    manageYourStoresDetails: "Manage your store's details",
    editStore: "Edit store",
    defaultCurrency: "Default currency",
    defaultRegion: "Default region",
    swapLinkTemplate: "Swap link template",
    paymentLinkTemplate: "Payment link template",
    inviteLinkTemplate: "Invite link template",
    currencies: "Currencies",
    addCurrencies: "Add currencies",
    enableTaxInclusivePricing: "Enable tax inclusive pricing",
    disableTaxInclusivePricing: "Disable tax inclusive pricing",
    removeCurrencyWarning_one: "You are about to remove {{count}} currency from your store. Ensure that you have removed all prices using the currency before proceeding.",
    removeCurrencyWarning_other: "You are about to remove {{count}} currencies from your store. Ensure that you have removed all prices using the currencies before proceeding.",
    currencyAlreadyAdded: "The currency has already been added to your store.",
    edit: {
      header: "Edit Store"
    },
    toast: {
      update: "Store successfully updated",
      currenciesUpdated: "Currencies updated successfully",
      currenciesRemoved: "Removed currencies from the store successfully",
      updatedTaxInclusivitySuccessfully: "Tax inclusive pricing updated successfully"
    }
  },
  regions: {
    domain: "Regions",
    subtitle: "A region is an area that you sell products in. It can cover multipe countries, and has different tax rates, providers, and currency.",
    createRegion: "Create Region",
    createRegionHint: "Manage tax rates and providers for a set of countries.",
    addCountries: "Add countries",
    editRegion: "Edit Region",
    countriesHint: "Add the countries included in this region.",
    deleteRegionWarning: "You are about to delete the region {{name}}. This action cannot be undone.",
    removeCountriesWarning_one: "You are about to remove {{count}} country from the region. This action cannot be undone.",
    removeCountriesWarning_other: "You are about to remove {{count}} countries from the region. This action cannot be undone.",
    removeCountryWarning: "You are about to remove the country {{name}} from the region. This action cannot be undone.",
    automaticTaxesHint: "When enabled, taxes will only be calculated at checkout based on the shipping address.",
    taxInclusiveHint: "When enabled, prices in the region will be tax inclusive.",
    providersHint: " Add which payment providers are available in this region.",
    shippingOptions: "Shipping Options",
    deleteShippingOptionWarning: "You are about to delete the shipping option {{name}}. This action cannot be undone.",
    return: "Return",
    outbound: "Outbound",
    priceType: "Price Type",
    flatRate: "Flat Rate",
    calculated: "Calculated",
    list: {
      noRecordsMessage: "Create a region for the areas that you sell in."
    },
    toast: {
      delete: "Region deleted successfully",
      edit: "Region edit saved",
      create: "Region created successfully",
      countries: "Region countries updated successfully"
    },
    shippingOption: {
      createShippingOption: "Create Shipping Option",
      createShippingOptionHint: "Create a new shipping option for the region.",
      editShippingOption: "Edit Shipping Option",
      fulfillmentMethod: "Fulfillment Method",
      type: {
        outbound: "Outbound",
        outboundHint: "Use this if you are creating a shipping option for sending products to the customer.",
        return: "Return",
        returnHint: "Use this if you are creating a shipping option for the customer to return products to you."
      },
      priceType: {
        label: "Price Type",
        flatRate: "Flat rate",
        calculated: "Calculated"
      },
      availability: {
        adminOnly: "Admin only",
        adminOnlyHint: "When enabled, the shipping option will only be available in the admin dashboard, and not in the storefront."
      },
      taxInclusiveHint: "When enabled, the shipping option's price will be tax inclusive.",
      requirements: {
        label: "Requirements",
        hint: "Specify the requirements for the shipping option."
      }
    }
  },
  taxes: {
    domain: "Tax Regions",
    domainDescription: "Manage your tax region",
    countries: {
      taxCountriesHint: "Tax settings apply to the listed countries."
    },
    settings: {
      editTaxSettings: "Edit Tax Settings",
      taxProviderLabel: "Tax provider",
      systemTaxProviderLabel: "System Tax Provider",
      calculateTaxesAutomaticallyLabel: "Calculate taxes automatically",
      calculateTaxesAutomaticallyHint: "When enabled, tax rates will be calculated automatically and applied to carts. When disabled, taxes must be manually computed at checkout. Manual taxes are recommended for usage with third-party tax providers.",
      applyTaxesOnGiftCardsLabel: "Apply taxes on gift cards",
      applyTaxesOnGiftCardsHint: "When enabled, taxes will be applied to gift cards at checkout. In some countries, tax regulations require the application of taxes to gift cards upon purchase.",
      defaultTaxRateLabel: "Default tax rate",
      defaultTaxCodeLabel: "Default tax code"
    },
    defaultRate: {
      sectionTitle: "Default Tax Rate"
    },
    taxRate: {
      sectionTitle: "Tax Rates",
      createTaxRate: "Create Tax Rate",
      createTaxRateHint: "Create a new tax rate for the region.",
      deleteRateDescription: "You are about to delete the tax rate {{name}}. This action cannot be undone.",
      editTaxRate: "Edit Tax Rate",
      editRateAction: "Edit rate",
      editOverridesAction: "Edit overrides",
      editOverridesTitle: "Edit Tax Rate Overrides",
      editOverridesHint: "Specify the overrides for the tax rate.",
      deleteTaxRateWarning: "You are about to delete the tax rate {{name}}. This action cannot be undone.",
      productOverridesLabel: "Product overrides",
      productOverridesHint: "Specify the product overrides for the tax rate.",
      addProductOverridesAction: "Add product overrides",
      productTypeOverridesLabel: "Product type overrides",
      productTypeOverridesHint: "Specify the product type overrides for the tax rate.",
      addProductTypeOverridesAction: "Add product type overrides",
      shippingOptionOverridesLabel: "Shipping option overrides",
      shippingOptionOverridesHint: "Specify the shipping option overrides for the tax rate.",
      addShippingOptionOverridesAction: "Add shipping option overrides",
      productOverridesHeader: "Products",
      productTypeOverridesHeader: "Product Types",
      shippingOptionOverridesHeader: "Shipping Options"
    }
  },
  locations: {
    domain: "Locations",
    editLocation: "Edit location",
    addSalesChannels: "Add sales channels",
    noLocationsFound: "No locations found",
    selectLocations: "Select locations that stock the item.",
    deleteLocationWarning: "You are about to delete the location {{name}}. This action cannot be undone.",
    removeSalesChannelsWarning_one: "You are about to remove {{count}} sales channel from the location.",
    removeSalesChannelsWarning_other: "You are about to remove {{count}} sales channels from the location.",
    toast: {
      create: "Location created sucessfully",
      update: "Location updated sucessfully",
      removeChannel: "Sales channel removed sucessfully"
    }
  },
  reservations: {
    domain: "Reservations",
    subtitle: "Manage the reserved quantity of inventory items.",
    deleteWarning: "You are about to delete a reservation. This action cannot be undone."
  },
  salesChannels: {
    domain: "Sales Channels",
    subtitle: "Manage the online and offline channels you sell products on.",
    createSalesChannel: "Create Sales Channel",
    createSalesChannelHint: "Create a new sales channel to sell your products on.",
    enabledHint: "Specify whether the sales channel is enabled.",
    removeProductsWarning_one: "You are about to remove {{count}} product from {{sales_channel}}.",
    removeProductsWarning_other: "You are about to remove {{count}} products from {{sales_channel}}.",
    addProducts: "Add Products",
    editSalesChannel: "Edit sales channel",
    productAlreadyAdded: "The product has already been added to the sales channel.",
    deleteSalesChannelWarning: "You are about to delete the sales channel {{name}}. This action cannot be undone.",
    toast: {
      create: "Sales channel created successfully",
      update: "Sales channel updated successfully",
      delete: "Sales channel deleted successfully"
    },
    products: {
      list: {
        noRecordsMessage: "There are no products in the sales channel."
      },
      add: {
        list: {
          noRecordsMessage: "Create a product first."
        }
      }
    }
  },
  apiKeyManagement: {
    domain: {
      publishable: "Publishable API Keys",
      secret: "Secret API Keys"
    },
    subtitle: {
      publishable: "Manage API keys used in the storefront to limit the scope of requests to specific sales channels.",
      secret: "Manage API keys used to authenticate admin users in admin applications."
    },
    status: {
      active: "Active",
      revoked: "Revoked"
    },
    type: {
      publishable: "Publishable",
      secret: "Secret"
    },
    create: {
      createPublishableHeader: "Create Publishable API Key",
      createPublishableHint: "Create a new publishable API key to limit the scope of requests to specific sales channels.",
      createSecretHeader: "Create Secret API Key",
      createSecretHint: "Create a new secret API key to access the Medusa API as an authenticated admin user.",
      secretKeyCreatedHeader: "Secret Key Created",
      secretKeyCreatedHint: "Your new secret key has been generated. Copy and securely store it now. This is the only time it will be displayed.",
      copySecretTokenSuccess: "Secret key was copied to clipboard.",
      copySecretTokenFailure: "Failed to copy secret key to clipboard.",
      successToast: "API key was successfully created."
    },
    edit: {
      header: "Edit API Key",
      description: "Edit the API key's title.",
      successToast: "API key {{title}} was successfully updated."
    },
    salesChannels: {
      title: "Add Sales Channels",
      description: "Add the sales channels that the API key should be limited to.",
      successToast_one: "{{count}} sales channel was successfully added to the API key.",
      successToast_other: "{{count}} sales channels were successfully added to the API key.",
      alreadyAddedTooltip: "The sales channel has already been added to the API key.",
      list: {
        noRecordsMessage: "There are no sales channels in the publishable API key's scope."
      }
    },
    delete: {
      warning: "You are about to delete the API key {{title}}. This action cannot be undone.",
      successToast: "API key {{title}} was successfully deleted."
    },
    revoke: {
      warning: "You are about to revoke the API key {{title}}. This action cannot be undone.",
      successToast: "API key {{title}} was successfully revoked."
    },
    addSalesChannels: {
      list: {
        noRecordsMessage: "Create a sales channel first."
      }
    },
    removeSalesChannel: {
      warning: "You are about to remove the sales channel {{name}} from the API key. This action cannot be undone.",
      warningBatch_one: "You are about to remove {{count}} sales channel from the API key. This action cannot be undone.",
      warningBatch_other: "You are about to remove {{count}} sales channels from the API key. This action cannot be undone.",
      successToast: "Sales channel was successfully removed from the API key.",
      successToastBatch_one: "{{count}} sales channel was successfully removed from the API key.",
      successToastBatch_other: "{{count}} sales channels were successfully removed from the API key."
    },
    actions: {
      revoke: "Revoke API key",
      copy: "Copy API key",
      copySuccessToast: "API key was copied to clipboard."
    },
    table: {
      lastUsedAtHeader: "Last Used At",
      createdAtHeader: "Revoked At"
    },
    fields: {
      lastUsedAtLabel: "Last used at",
      revokedByLabel: "Revoked by",
      revokedAtLabel: "Revoked at",
      createdByLabel: "Created by"
    }
  },
  returnReasons: {
    domain: "Return Reasons",
    subtitle: "Manage reasons for returned items.",
    calloutHint: "Manage the reasons to categorize returns.",
    editReason: "Edit Return Reason",
    create: {
      header: "Add Return Reason",
      subtitle: "Specify the most common reasons for returns.",
      hint: "Create a new return reason to categorize returns.",
      successToast: "Return reason {{label}} was successfully created."
    },
    edit: {
      header: "Edit Return Reason",
      subtitle: "Edit the value of the return reason.",
      successToast: "Return reason {{label}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the return reason {{label}}. This action cannot be undone.",
      successToast: "Return reason {{label}} was successfully deleted."
    },
    fields: {
      value: {
        label: "Value",
        placeholder: "wrong_size",
        tooltip: "The value should be a unique identifier for the return reason."
      },
      label: { label: "Label", placeholder: "Wrong size" },
      description: {
        label: "Description",
        placeholder: "Customer received the wrong size"
      }
    }
  },
  login: {
    forgotPassword: "Forgot password? - <0>Reset</0>",
    title: "Welcome to Medusa",
    hint: "Sign in to access the account area"
  },
  invite: {
    title: "Welcome to Medusa",
    hint: "Create your account below",
    backToLogin: "Back to login",
    createAccount: "Create account",
    alreadyHaveAccount: "Already have an account? - <0>Log in</0>",
    emailTooltip: "Your email cannot be changed. If you would like to use another email, a new invite must be sent.",
    invalidInvite: "The invite is invalid or has expired.",
    successTitle: "Your account has been registered",
    successHint: "Get started with Medusa Admin right away.",
    successAction: "Start Medusa Admin",
    invalidTokenTitle: "Your invite token is invalid",
    invalidTokenHint: "Try requesting a new invite link.",
    passwordMismatch: "Passwords do not match",
    toast: {
      accepted: "Invite successfully accepted"
    }
  },
  resetPassword: {
    title: "Reset password",
    hint: "Enter your email below, and we will send you instructions on how to reset your password.",
    email: "Email",
    sendResetInstructions: "Send reset instructions",
    backToLogin: "<0>Back to login</0>",
    newPasswordHint: "Choose a new password below.",
    invalidTokenTitle: "Your reset token is invalid",
    invalidTokenHint: "Try requesting a new reset link.",
    expiredTokenTitle: "Your reset token has expired",
    goToResetPassword: "Go to Reset Password",
    resetPassword: "Reset password",
    newPassword: "New password",
    repeatNewPassword: "Repeat new password",
    tokenExpiresIn: "Token expires in <0>{{time}}</0> minutes",
    successfulRequestTitle: "Successfully sent you an email",
    successfulRequest: "We've sent you an email which you can use to reset your password. Check your spam folder if you haven't received it after a few minutes.",
    successfulResetTitle: "Password reset successful",
    successfulReset: "Please login in on the login page.",
    passwordMismatch: "Passwords do no match",
    invalidLinkTitle: "Your reset link is invalid",
    invalidLinkHint: "Try resetting your password again."
  },
  workflowExecutions: {
    domain: "Workflows",
    subtitle: "View and keep track of workflow executions in your Medusa application.",
    transactionIdLabel: "Transaction ID",
    workflowIdLabel: "Workflow ID",
    progressLabel: "Progress",
    stepsCompletedLabel_one: "{{completed}} of {{count}} step",
    stepsCompletedLabel_other: "{{completed}} of {{count}} steps",
    list: {
      noRecordsMessage: "No workflows have been executed, yet."
    },
    history: {
      sectionTitle: "History",
      runningState: "Running...",
      awaitingState: "Awaiting",
      failedState: "Failed",
      skippedState: "Skipped",
      skippedFailureState: "Skipped (Failure)",
      definitionLabel: "Definition",
      outputLabel: "Output",
      compensateInputLabel: "Compensate input",
      revertedLabel: "Reverted",
      errorLabel: "Error"
    },
    state: {
      done: "Done",
      failed: "Failed",
      reverted: "Reverted",
      invoking: "Invoking",
      compensating: "Compensating",
      notStarted: "Not started"
    },
    transaction: {
      state: {
        waitingToCompensate: "Waiting to compensate"
      }
    },
    step: {
      state: {
        skipped: "Skipped",
        skippedFailure: "Skipped (Failure)",
        dormant: "Dormant",
        timeout: "Timeout"
      }
    }
  },
  productTypes: {
    domain: "Product Types",
    subtitle: "Organize your products into types.",
    create: {
      header: "Create Product Type",
      hint: "Create a new product type to categorize your products.",
      successToast: "Product type {{value}} was successfully created."
    },
    edit: {
      header: "Edit Product Type",
      successToast: "Product type {{value}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the product type {{value}}. This action cannot be undone.",
      successToast: "Product type {{value}} was successfully deleted."
    },
    fields: {
      value: "Value"
    }
  },
  productTags: {
    domain: "Product Tags",
    create: {
      header: "Create Product Tag",
      subtitle: "Create a new product tag to categorize your products.",
      successToast: "Product tag {{value}} was successfully created."
    },
    edit: {
      header: "Edit Product Tag",
      subtitle: "Edit the value of the product tag.",
      successToast: "Product tag {{value}} was successfully updated."
    },
    delete: {
      confirmation: "You are about to delete the product tag {{value}}. This action cannot be undone.",
      successToast: "Product tag {{value}} was successfully deleted."
    },
    fields: {
      value: "Value"
    }
  },
  notifications: {
    domain: "Notifications",
    emptyState: {
      title: "No notifications",
      description: "You don't have any notifications at the moment, but once you do they will live here."
    },
    accessibility: {
      description: "notifications about Medusa activities will be listed here."
    }
  },
  errors: {
    serverError: "Server error - Try again later.",
    invalidCredentials: "Wrong email or password"
  },
  statuses: {
    scheduled: "Scheduled",
    expired: "Expired",
    active: "Active",
    enabled: "Enabled",
    disabled: "Disabled"
  },
  labels: {
    productVariant: "Product Variant",
    prices: "Prices",
    available: "Available",
    inStock: "In stock",
    added: "Added",
    removed: "Removed"
  },
  fields: {
    amount: "Amount",
    refundAmount: "Refund amount",
    name: "Name",
    default: "Default",
    lastName: "Last Name",
    firstName: "First Name",
    title: "Title",
    customTitle: "Custom title",
    manageInventory: "Manage inventory",
    inventoryKit: "Has inventory kit",
    inventoryItems: "Inventory items",
    inventoryItem: "Inventory item",
    requiredQuantity: "Required quantity",
    description: "Description",
    email: "Email",
    password: "Password",
    repeatPassword: "Repeat Password",
    confirmPassword: "Confirm Password",
    newPassword: "New Password",
    repeatNewPassword: "Repeat New Password",
    categories: "Categories",
    shippingMethod: "Shipping method",
    configurations: "Configurations",
    conditions: "Conditions",
    category: "Category",
    collection: "Collection",
    discountable: "Discountable",
    handle: "Handle",
    subtitle: "Subtitle",
    item: "Item",
    qty: "qty.",
    limit: "Limit",
    tags: "Tags",
    type: "Type",
    reason: "Reason",
    none: "none",
    all: "all",
    search: "Search",
    percentage: "Percentage",
    sales_channels: "Sales Channels",
    customer_groups: "Customer Groups",
    product_tags: "Product Tags",
    product_types: "Product Types",
    product_collections: "Product Collections",
    status: "Status",
    code: "Code",
    value: "Value",
    disabled: "Disabled",
    dynamic: "Dynamic",
    normal: "Normal",
    years: "Years",
    months: "Months",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    totalRedemptions: "Total Redemptions",
    countries: "Countries",
    paymentProviders: "Payment Providers",
    refundReason: "Refund Reason",
    fulfillmentProviders: "Fulfillment Providers",
    fulfillmentProvider: "Fulfillment Provider",
    providers: "Providers",
    availability: "Availability",
    inventory: "Inventory",
    optional: "Optional",
    note: "Note",
    automaticTaxes: "Automatic Taxes",
    taxInclusivePricing: "Tax inclusive pricing",
    currency: "Currency",
    address: "Address",
    address2: "Apartment, suite, etc.",
    city: "City",
    postalCode: "Postal Code",
    country: "Country",
    state: "State",
    province: "Province",
    company: "Company",
    phone: "Phone",
    metadata: "Metadata",
    selectCountry: "Select country",
    products: "Products",
    variants: "Variants",
    orders: "Orders",
    account: "Account",
    total: "Order Total",
    paidTotal: "Total captured",
    totalExclTax: "Total excl. tax",
    subtotal: "Subtotal",
    shipping: "Shipping",
    outboundShipping: "Outbound Shipping",
    returnShipping: "Return Shipping",
    tax: "Tax",
    created: "Created",
    key: "Key",
    customer: "Customer",
    date: "Date",
    order: "Order",
    fulfillment: "Fulfillment",
    provider: "Provider",
    payment: "Payment",
    items: "Items",
    salesChannel: "Sales Channel",
    region: "Region",
    discount: "Discount",
    role: "Role",
    sent: "Sent",
    salesChannels: "Sales Channels",
    product: "Product",
    createdAt: "Created",
    updatedAt: "Updated",
    revokedAt: "Revoked at",
    true: "True",
    false: "False",
    giftCard: "Gift Card",
    tag: "Tag",
    dateIssued: "Date issued",
    issuedDate: "Issued date",
    expiryDate: "Expiry date",
    price: "Price",
    priceTemplate: "Price {{regionOrCurrency}}",
    height: "Height",
    width: "Width",
    length: "Length",
    weight: "Weight",
    midCode: "MID code",
    hsCode: "HS code",
    ean: "EAN",
    upc: "UPC",
    inventoryQuantity: "Inventory quantity",
    barcode: "Barcode",
    countryOfOrigin: "Country of origin",
    material: "Material",
    thumbnail: "Thumbnail",
    sku: "SKU",
    managedInventory: "Managed inventory",
    allowBackorder: "Allow backorder",
    inStock: "In stock",
    location: "Location",
    quantity: "Quantity",
    variant: "Variant",
    id: "ID",
    parent: "Parent",
    minSubtotal: "Min. Subtotal",
    maxSubtotal: "Max. Subtotal",
    shippingProfile: "Shipping Profile",
    summary: "Summary",
    details: "Details",
    label: "Label",
    rate: "Rate",
    requiresShipping: "Requires shipping",
    unitPrice: "Unit price",
    startDate: "Start date",
    endDate: "End date",
    draft: "Draft",
    values: "Values"
  },
  dateTime: {
    years_one: "Year",
    years_other: "Years",
    months_one: "Month",
    months_other: "Months",
    weeks_one: "Week",
    weeks_other: "Weeks",
    days_one: "Day",
    days_other: "Days",
    hours_one: "Hour",
    hours_other: "Hours",
    minutes_one: "Minute",
    minutes_other: "Minutes",
    seconds_one: "Second",
    seconds_other: "Seconds"
  }
};

// src/i18n/translations/sr.json
var sr_default = {
  $schema: "./$schema.json",
  general: {
    ascending: "Rastu\u0107e",
    descending: "Opadaju\u0107e",
    add: "Dodaj",
    start: "Po\u010Detak",
    end: "Kraj",
    open: "Otvoren",
    close: "Zatvori",
    apply: "Primijeni",
    range: "Opseg",
    search: "Pretraga",
    of: "od",
    results: "rezultati",
    pages: "stranice",
    next: "Slede\u0107i",
    prev: "Prev",
    is: "je",
    timeline: "Vremenska linija",
    success: "Uspeh",
    warning: "Upozorenje",
    tip: "Tip",
    error: "Gre\u0161ka",
    select: "Izaberi",
    selected: "Odabran",
    enabled: "Omogu\u0107eno",
    disabled: "Onemogu\u0107en",
    expired: "Istekao",
    active: "Aktivan",
    revoked: "Oduzet",
    new: "Novi",
    modified: "Izmenjeno",
    added: "Dodato",
    removed: "Uklonjen",
    admin: "Admin",
    store: "Prodavnica",
    details: "Detalji",
    items_one: "{{count}} stavka",
    items_other: "{{count}} stavki",
    countSelected: "{{count}} odabranih",
    countOfTotalSelected: "{{broj}} od {{ukupno}} odabranih",
    plusCount: "+ {{broj}}",
    plusCountMore: "+ {{count}} vi\u0161e",
    areYouSure: "Da li si siguran?",
    noRecordsFound: "Nema zapisa prona\u0111enih",
    typeToConfirm: "Molimo vas da otkucate {val} da potvrdite:",
    noResultsTitle: "Nema rezultata",
    noResultsMessage: "Poku\u0161aj da promijeni\u0161 filtre ili upit za pretragu",
    noSearchResults: "Nema rezultata pretrage",
    noSearchResultsFor: "Nema rezultata pretrage za <0>'{{query}}'</0>",
    noRecordsTitle: "Nema zapisa",
    noRecordsMessage: "Nema zapisa za prikazivanje",
    unsavedChangesTitle: "Da li ste sigurni da \u017Eelite da napustite ovaj obrazac?",
    unsavedChangesDescription: "Imate nespremljene promjene koje \u0107e biti izgubljene ako napustite ovaj obrazac.",
    includesTaxTooltip: "Cijene u ovoj koloni su sa uklju\u010Denim porezom.",
    excludesTaxTooltip: "Cijene u ovoj koloni su bez poreza.",
    noMoreData: "Nema vi\u0161e podataka"
  },
  json: {
    header: "JSON - JSON",
    numberOfKeys_one: "{{count}} klju\u010D",
    numberOfKeys_other: "{{count}} klju\u010Deva",
    drawer: {
      header_one: "JSON <0>\xB7 {{count}} klju\u010D</0>",
      header_other: "JSON <0>\xB7 {{count}} klju\u010Deva</0>",
      description: "Pogledaj JSON podatke za ovaj objekat."
    }
  },
  metadata: {
    header: "Metapodaci",
    numberOfKeys_one: "{{broj}} klju\u010D",
    numberOfKeys_other: "{{count}} klju\u010Deva",
    edit: {
      header: "Izmijeni Metapodatke",
      description: "Izmijeni metapodatke za ovaj objekat.",
      successToast: "Metadata je uspje\u0161no a\u017Eurirana.",
      actions: {
        insertRowAbove: "Umetni red iznad",
        insertRowBelow: "Unesi red ispod",
        deleteRow: "Obri\u0161i red"
      },
      labels: {
        key: "Klju\u010D",
        value: "Vrijednost"
      },
      complexRow: {
        label: "Neki redovi su onemogu\u0107eni",
        description: "Ovaj objekat sadr\u017Ei ne-primitivne metapodatke, kao \u0161to su nizovi ili objekti, koji se ne mogu ure\u0111ivati ovde. Da biste uredili onemogu\u0107ene redove, koristite API direktno.",
        tooltip: "Ova vrsta je onemogu\u0107ena jer sadr\u017Ei neprimitivne podatke."
      }
    }
  },
  validation: {
    mustBeInt: "Vrijednost mora biti cijeli broj.",
    mustBePositive: "Vrijednost mora biti pozitivan broj."
  },
  actions: {
    save: "Sa\u010Duvaj",
    saveAsDraft: "Sa\u010Duvaj kao nacrt",
    copy: "Kopiraj",
    copied: "Kopirano",
    duplicate: "Duplikat",
    publish: "Objavi",
    create: "Kreiraj",
    delete: "Obri\u0161i",
    remove: "Ukloni",
    revoke: "Poni\u0161ti",
    cancel: "Otka\u017Ei",
    forceConfirm: "Sila potvrdi",
    continueEdit: "Nastavi ure\u0111ivanje",
    enable: "Omogu\u0107i",
    disable: "Onemogu\u0107i",
    undo: "Poni\u0161ti",
    complete: "Potpun",
    viewDetails: "Pogledaj detalje",
    back: "Nazad",
    close: "Zatvori",
    showMore: "Prika\u017Ei vi\u0161e",
    continue: "Nastavi",
    continueWithEmail: "Nastavi sa E-mailom",
    idCopiedToClipboard: "ID kopiran u me\u0111uspremnik",
    addReason: "Dodaj Razlog",
    addNote: "Dodaj Napomenu",
    reset: "Reset",
    confirm: "Potvrdi",
    edit: "Izmijeni",
    addItems: "Dodaj stavke",
    download: "Preuzmi",
    clear: "Jasan",
    clearAll: "Jasno sve",
    apply: "Primijeni",
    add: "Dodaj",
    select: "Izaberi",
    browse: "Pretra\u017Ei",
    logout: "Odjavi se",
    hide: "Sakrij",
    export: "Izvoz",
    import: "Uvoz"
  },
  operators: {
    in: "U"
  },
  app: {
    search: {
      label: "Pretraga",
      title: "Pretraga",
      description: "Pretra\u017Ei cijelu prodavnicu, uklju\u010Duju\u0107i narud\u017Ebe, proizvode, kupce i jo\u0161 mnogo toga.",
      allAreas: "Sve oblasti",
      navigation: "Navigacija",
      openResult: "Otvoren rezultat",
      showMore: "Prika\u017Ei vi\u0161e",
      placeholder: "Sko\u010Di na ili prona\u0111i bilo \u0161ta...",
      noResultsTitle: "Nema rezultata prona\u0111enih",
      noResultsMessage: "Nismo mogli prona\u0107i ni\u0161ta \u0161to odgovara va\u0161oj pretrazi.",
      emptySearchTitle: "Tipi za pretragu",
      emptySearchMessage: "Unesite klju\u010Dnu rije\u010D ili frazu za istra\u017Eivanje.",
      loadMore: "U\u010Ditaj {{count}} vi\u0161e",
      groups: {
        all: "Sve oblasti",
        customer: "Kupci",
        customerGroup: "Grupacije kupaca",
        product: "Proizvodi",
        productVariant: "Proizvodne varijante",
        inventory: "Inventar",
        reservation: "Rezervacije",
        category: "Kategorije",
        collection: "Kolekcije",
        order: "Naru\u010Divanja",
        promotion: "Promocije",
        campaign: "Kampanje",
        priceList: "Cjenovnici",
        user: "Korisnici",
        region: "Regije",
        taxRegion: "Poreske regije",
        returnReason: "Razlozi za povratak",
        salesChannel: "Prodajni kanali",
        productType: "Tipovi proizvoda",
        productTag: "Proizvodni Oznaci",
        location: "Lokacije",
        shippingProfile: "\u0160pediterski profili",
        publishableApiKey: "Objavljivi API klju\u010Devi",
        secretApiKey: "Tajni API Klju\u010Devi",
        command: "Komande",
        navigation: "Navigacija"
      }
    },
    keyboardShortcuts: {
      pageShortcut: "Sko\u010Di na",
      settingShortcut: "Pode\u0161avanja",
      commandShortcut: "Komande",
      then: "onda",
      navigation: {
        goToOrders: "Naru\u010Divanja",
        goToProducts: "Proizvodi",
        goToCollections: "Kolekcije",
        goToCategories: "Kategorije",
        goToCustomers: "Kupci",
        goToCustomerGroups: "Grupacije kupaca",
        goToInventory: "Inventar",
        goToReservations: "Rezervacije",
        goToPriceLists: "Cjenovnici",
        goToPromotions: "Promocije",
        goToCampaigns: "Kampanje"
      },
      settings: {
        goToSettings: "Pode\u0161avanja",
        goToStore: "Prodavnica",
        goToUsers: "Korisnici",
        goToRegions: "Regije",
        goToTaxRegions: "Poreske regije",
        goToSalesChannels: "Prodajni kanali",
        goToProductTypes: "Tipovi proizvoda",
        goToLocations: "Lokacije",
        goToPublishableApiKeys: "Objavljivi API klju\u010Devi",
        goToSecretApiKeys: "Tajni API klju\u010Devi",
        goToWorkflows: "Tokovi rada",
        goToProfile: "Profil",
        goToReturnReasons: "Razlozi za povratak"
      }
    },
    menus: {
      user: {
        documentation: "Dokumentacija",
        changelog: "Zapis promjena",
        shortcuts: "Pre\u010Dice",
        profileSettings: "Pode\u0161avanja profila",
        theme: {
          label: "Tema",
          dark: "Tamni",
          light: "Svjetlost",
          system: "Sistem"
        }
      },
      store: {
        label: "Prodavnica",
        storeSettings: "Pode\u0161avanja prodavnice"
      },
      actions: {
        logout: "Odjavi se"
      }
    },
    nav: {
      accessibility: {
        title: "Navigacija",
        description: "Navigacioni meni za kontrolnu tablu."
      },
      common: {
        extensions: "Produ\u017Eeci"
      },
      main: {
        store: "Prodavnica",
        storeSettings: "Pode\u0161avanja prodavnice"
      },
      settings: {
        header: "Pode\u0161avanja",
        general: "General - general",
        developer: "Razvija\u010D",
        myAccount: "Moj Nalog"
      }
    }
  },
  dataGrid: {
    columns: {
      view: "Pogled",
      resetToDefault: "Resetuj na podrazumevano",
      disabled: "Promjena koje su kolone vidljive je onemogu\u0107ena."
    },
    shortcuts: {
      label: "Pre\u010Dice",
      commands: {
        undo: "Poni\u0161ti",
        redo: "Redo",
        copy: "Kopiraj",
        paste: "Pasta",
        edit: "Izmijeni",
        delete: "Izbri\u0161i",
        clear: "Jasan",
        moveUp: "Pomjeri se nagore",
        moveDown: "Pomjeri se nani\u017Ee",
        moveLeft: "Pomjeri lijevo",
        moveRight: "Pomjeri desno",
        moveTop: "Premjesti na vrh",
        moveBottom: "Premjesti na dno",
        selectDown: "Izaberi dolje",
        selectUp: "Izaberi gore",
        selectColumnDown: "Izaberi kolonu prema dolje",
        selectColumnUp: "Izaberi kolonu gore",
        focusToolbar: "Fokus alatna traka",
        focusCancel: "Fokus otka\u017Ei"
      }
    },
    errors: {
      fixError: "Ispravi gre\u0161ku",
      count_one: "{{count}} gre\u0161ka",
      count_other: "{{count}} gre\u0161aka"
    }
  },
  filters: {
    date: {
      today: "Danas",
      lastSevenDays: "Poslednjih 7 dana",
      lastThirtyDays: "Poslednjih 30 dana",
      lastNinetyDays: "Poslednjih 90 dana",
      lastTwelveMonths: "Poslednjih 12 meseci",
      custom: "Prilago\u0111eno",
      from: "Od",
      to: "To"
    },
    compare: {
      lessThan: "Manje od",
      greaterThan: "Ve\u0107i od",
      exact: "Ta\u010Dno",
      range: "Raspon",
      lessThanLabel: "manje od {{value}}",
      greaterThanLabel: "ve\u0107i od {{value}}",
      andLabel: "i"
    },
    addFilter: "Dodaj filter"
  },
  errorBoundary: {
    badRequestTitle: "400 - Lo\u0161 zahtev",
    badRequestMessage: "Zahtev nije mogao biti shva\u0107en od strane servera zbog neispravne sintakse.",
    notFoundTitle: "404 - Na ovoj adresi nema stranice",
    notFoundMessage: "Proverite URL i poku\u0161ajte ponovo, ili koristite pretra\u017Eiva\u010D da prona\u0111ete ono \u0161to tra\u017Eite.",
    internalServerErrorTitle: "500 - Interna gre\u0161ka servera",
    internalServerErrorMessage: "Do\u0161lo je do neo\u010Dekivane gre\u0161ke na serveru. Molimo poku\u0161ajte ponovo kasnije.",
    defaultTitle: "Dogodila se gre\u0161ka",
    defaultMessage: "Do\u0161lo je do neo\u010Dekivane gre\u0161ke prilikom prikazivanja ove stranice.",
    noMatchMessage: "Stranica koju tra\u017Eite ne postoji.",
    backToDashboard: "Nazad na kontrolnu tablu"
  },
  addresses: {
    shippingAddress: {
      header: "Adresa za isporuku",
      editHeader: "Izmeni adresu za dostavu",
      editLabel: "Adresa za isporuku",
      label: "Adresa za dostavu"
    },
    billingAddress: {
      header: "Adresa za naplatu",
      editHeader: "Izmeni adresu za naplatu",
      editLabel: "Adresa za naplatu",
      label: "Adresa za fakturiranje",
      sameAsShipping: "Isto kao adresa za dostavu"
    },
    contactHeading: "Kontakt",
    locationHeading: "Lokacija"
  },
  email: {
    editHeader: "Izmeni Email",
    editLabel: "Email",
    label: "Email"
  },
  transferOwnership: {
    header: "Prenos Vlasni\u0161tva",
    label: "Prenos vlasni\u0161tva",
    details: {
      order: "Detalji narud\u017Ebe",
      draft: "Nacrt detalja"
    },
    currentOwner: {
      label: "Trenutni vlasnik",
      hint: "Trenutni vlasnik narud\u017Ebe."
    },
    newOwner: {
      label: "Novi vlasnik",
      hint: "Novi vlasnik da prenese narud\u017Ebinu na."
    },
    validation: {
      mustBeDifferent: "Novi vlasnik mora biti druga\u010Diji od trenutnog vlasnika.",
      required: "Novi vlasnik je potreban."
    }
  },
  sales_channels: {
    availableIn: "Dostupno u <0>{{x}}</0> od <1>{{y}}</1> prodajnih kanala"
  },
  products: {
    domain: "Proizvodi",
    list: {
      noRecordsMessage: "Kreiraj svoj prvi proizvod da po\u010Dne\u0161 da prodaje\u0161."
    },
    create: {
      header: "General - general",
      tabs: {
        details: "Detalji",
        organize: "Organizovati",
        variants: "Varijante",
        inventory: "Inventarni kompleti"
      },
      errors: {
        variants: "Molimo vas da odaberete barem jednu varijantu.",
        options: "Molim te da kreira\u0161 barem jednu opciju.",
        uniqueSku: "SKU mora biti jedinstven."
      },
      inventory: {
        heading: "Inventarni kompleti",
        label: "Dodaj inventarne stavke u inventarni komplet varijante.",
        itemPlaceholder: "Izaberi stavku inventara",
        quantityPlaceholder: "Koliko je od ovih potrebno za komplet?"
      },
      variants: {
        header: "Varijante",
        subHeadingTitle: "Da, ovo je proizvod sa varijantama",
        subHeadingDescription: "Kada nije ozna\u010Deno, mi \u0107emo kreirati podrazumijevanu varijantu za vas",
        optionTitle: {
          placeholder: "Veli\u010Dina"
        },
        optionValues: {
          placeholder: "Mali, Srednji, Veliki"
        },
        productVariants: {
          label: "Proizvodne varijante",
          hint: "Ova rang lista \u0107e uticati na redosled varijanti u tvojoj prodavnici.",
          alert: "Dodaj opcije za kreiranje varijanti.",
          tip: "Varijante koje nisu proverene ne\u0107e biti kreirane. Uvek mo\u017Eete kreirati i ure\u0111ivati varijante kasnije, ali ova lista odgovara varijacijama u va\u0161im opcijama proizvoda."
        },
        productOptions: {
          label: "Opcije proizvoda",
          hint: "Defini\u0161i opcije za proizvod, npr. boja, veli\u010Dina, itd."
        }
      },
      successToast: "Proizvod {{title}} je uspje\u0161no kreiran."
    },
    export: {
      header: "Izvoz Lista Proizvoda",
      description: "Izvezi spisak proizvoda u CSV datoteku.",
      success: {
        title: "Mi obra\u0111ujemo va\u0161 izvoz",
        description: "Izvoz podataka mo\u017Ee potrajati nekoliko minuta. Obavijesti\u0107emo te kada zavr\u0161imo."
      },
      filters: {
        title: "Filtar",
        description: "Primijeni filtre u pregledu tabele da prilagodi\u0161 ovaj prikaz"
      },
      columns: {
        title: "Kolone",
        description: "Prilagodi izvezene podatke da zadovolje specifi\u010Dne potrebe"
      }
    },
    import: {
      header: "Uvezi Listu Proizvoda",
      uploadLabel: "Uvezi proizvode",
      uploadHint: "Prevuci i ispusti CSV datoteku ili klikni da otpremi\u0161",
      description: "Uvezi proizvode pru\u017Eanjem CSV datoteke u unaprijed definisanom formatu",
      template: {
        title: "Nesiguran u vezi sa tim kako da organizuje\u0161 svoju listu?",
        description: "Preuzmite \u0161ablon ispod da biste osigurali da pratite ispravan format."
      },
      upload: {
        title: "Otpremi CSV datoteku",
        description: "Kroz uvoze mo\u017Eete dodati ili a\u017Eurirati proizvode. Da biste a\u017Eurirali postoje\u0107e proizvode, morate koristiti postoje\u0107i rukohvat i ID, da biste a\u017Eurirali postoje\u0107e varijante, morate koristiti postoje\u0107i ID. Bi\u0107ete upitani za potvrdu pre nego \u0161to uvezemo proizvode.",
        preprocessing: "Predobrada...",
        productsToCreate: "Proizvodi \u0107e biti kreirani",
        productsToUpdate: "Proizvodi \u0107e biti a\u017Eurirani"
      },
      success: {
        title: "Mi obra\u0111ujemo va\u0161 uvoz",
        description: "U\u010Ditavanje podataka mo\u017Ee potrajati. Obavijesti\u0107emo vas kada zavr\u0161imo."
      }
    },
    deleteWarning: "Spremate se da obri\u0161ete proizvod {{title}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    variants: "Varijante",
    attributes: "Atributi",
    editProduct: "Izmijeni Proizvod",
    editAttributes: "Izmijeni Atributi",
    editOptions: "Izmijeni Opcije",
    editPrices: "Uredi cijene",
    media: {
      label: "Medija",
      editHint: "Dodaj medije na proizvod da ga prika\u017Ee\u0161 u svojoj prodavnici.",
      makeThumbnail: "Napraviti sli\u010Dicu",
      uploadImagesLabel: "Otpremi slike",
      uploadImagesHint: "Prevuci i ispusti slike ovde ili klikni da otpremi\u0161.",
      invalidFileType: "'{{name}}' nije podr\u017Ean tip datoteke. Podr\u017Eani tipovi datoteka su: {{types}}.",
      failedToUpload: "Nije uspjelo da se otpremi dodati medij. Molimo poku\u0161ajte ponovo.",
      deleteWarning_one: "Spremate se da obri\u0161ete {{count}} sliku. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      deleteWarning_other: "Spremate se da obri\u0161ete {{count}} slike. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      deleteWarningWithThumbnail_one: "Spremate se da obri\u0161ete {{count}} sliku uklju\u010Duju\u0107i sli\u010Dicu. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      deleteWarningWithThumbnail_other: "Spremate se da obri\u0161ete {{count}} slika uklju\u010Duju\u0107i sli\u010Dicu. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      thumbnailTooltip: "Sli\u010Dica",
      galleryLabel: "Galerija",
      downloadImageLabel: "Preuzmi trenutnu sliku",
      deleteImageLabel: "Obri\u0161i trenutnu sliku",
      emptyState: {
        header: "Nema medija jo\u0161",
        description: "Dodaj medije proizvodu da ga prika\u017Ee\u0161 u svojoj prodavnici.",
        action: "Dodaj medije"
      }
    },
    discountableHint: "Kada nije ozna\u010Deno, popusti se ne\u0107e primenjivati na ovaj proizvod.",
    noSalesChannels: "Nije dostupno u nijednom prodajnom kanalu",
    variantCount_one: "{{broj}} varijanta",
    variantCount_other: "{{count}} varijante",
    deleteVariantWarning: "Spremni ste da obri\u0161ete varijantu {{title}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
    productStatus: {
      draft: "Nacrt",
      published: "Objavljen",
      proposed: "Predlo\u017Een",
      rejected: "Odbijen"
    },
    fields: {
      title: {
        label: "Naslov",
        hint: "Daj svom proizvodu kratak i jasan naslov.<0/>Preporu\u010Dena du\u017Eina za pretra\u017Eiva\u010De je 50-60 karaktera."
      },
      subtitle: {
        label: "Podnaslov"
      },
      handle: {
        label: "Ru\u010Dka",
        tooltip: "Ru\u010Dka se koristi za referencu na proizvod u tvojoj prodavnici. Ako nije navedeno, ru\u010Dka \u0107e biti generisana iz naslova proizvoda."
      },
      description: {
        label: "Opis",
        hint: "Daj svom proizvodu kratak i jasan opis.<0/>Preporu\u010Dena du\u017Eina za pretra\u017Eiva\u010De je 120-160 karaktera."
      },
      discountable: {
        label: "Popustljiv",
        hint: "Kada nije ozna\u010Deno, popusti se ne\u0107e primijeniti na ovaj proizvod"
      },
      type: {
        label: "Tip"
      },
      collection: {
        label: "Kolekcija"
      },
      categories: {
        label: "Kategorije"
      },
      tags: {
        label: "Oznake"
      },
      sales_channels: {
        label: "Prodajni kanali",
        hint: "Ovaj proizvod \u0107e biti dostupan samo u podrazumijevanom prodajnom kanalu ako ostane netaknut."
      },
      countryOrigin: {
        label: "Zemlja porekla"
      },
      material: {
        label: "Materijal"
      },
      width: {
        label: "\u0160irina"
      },
      length: {
        label: "Du\u017Eina"
      },
      height: {
        label: "Visina"
      },
      weight: {
        label: "Te\u017Eina"
      },
      options: {
        label: "Opcije proizvoda",
        hint: "Opcije se koriste za definisanje boje, veli\u010Dine, itd. proizvoda.",
        add: "Dodaj opciju",
        optionTitle: "Naslov opcije",
        optionTitlePlaceholder: "Boja",
        variations: "Varijacije (razdvojene zarezima)",
        variantionsPlaceholder: "Crvena, Plava, Zelena"
      },
      variants: {
        label: "Proizvodne varijante",
        hint: "Varijante koje nisu proverene ne\u0107e biti kreirane, Ova rang lista \u0107e uticati na to kako \u0107e varijante biti rangirane u va\u0161em frontend-u."
      },
      mid_code: {
        label: "Srednji kod"
      },
      hs_code: {
        label: "HS kod"
      }
    },
    variant: {
      edit: {
        header: "Izmijeni Varijantu",
        success: "Proizvodna varijanta je uspje\u0161no ure\u0111ena"
      },
      create: {
        header: "Detalji varijante"
      },
      deleteWarning: "Da li si siguran da \u017Eeli\u0161 da obri\u0161e\u0161 ovu varijantu?",
      pricesPagination: "1 - {{trenutna}} od {{ukupno}} cijena",
      tableItemAvailable: "{{availableCount}} dostupno",
      tableItem_one: "{{availableCount}} dostupno na {{locationCount}} lokacija",
      tableItem_other: "{{availableCount}} dostupno na {{locationCount}} lokacija",
      inventory: {
        notManaged: "Nije upravljano",
        manageItems: "Upravljaj inventarskim stavkama",
        notManagedDesc: "Inventar se ne upravlja za ovu varijantu. Uklju\u010Dite 'Upravljanje Inventarom' da biste pratili inventar varijante.",
        manageKit: "Upravljati inventarskim kompletom",
        navigateToItem: "Idi na stavku inventara",
        actions: {
          inventoryItems: "Idi na stavku inventara",
          inventoryKit: "Prika\u017Ei stavke inventara"
        },
        inventoryKit: "Inventar Kit",
        inventoryKitHint: "Da li ova varijanta sastoji od nekoliko inventarnih stavki?",
        validation: {
          itemId: "Molimo vas da odaberete stavku inventara.",
          quantity: "Koli\u010Dina je obavezna. Molimo unesite pozitivni broj."
        },
        header: "Zalihe & Inventar",
        editItemDetails: "Izmijeni detalje stavke",
        manageInventoryLabel: "Upravljati inventarom",
        manageInventoryHint: "Kada je omogu\u0107eno, promijenit \u0107emo koli\u010Dinu u inventaru za vas kada se kreiraju narud\u017Ebe i povrati.",
        allowBackordersLabel: "Dozvoli povratne narud\u017Ebe",
        allowBackordersHint: "Kada je omogu\u0107eno, kupci mogu kupiti varijantu \u010Dak i ako nema dostupne koli\u010Dine.",
        toast: {
          levelsBatch: "Nivoi inventara a\u017Eurirani.",
          update: "Stavka inventara uspje\u0161no a\u017Eurirana.",
          updateLevel: "Nivo inventara je uspje\u0161no a\u017Euriran.",
          itemsManageSuccess: "Stavke inventara uspje\u0161no a\u017Eurirane."
        }
      }
    },
    options: {
      header: "Opcije",
      edit: {
        header: "Izmjena Opcije",
        successToast: "Opcija {{title}} je uspje\u0161no a\u017Eurirana."
      },
      create: {
        header: "Kreiraj Opciju",
        successToast: "Opcija {{title}} je uspje\u0161no kreirana."
      },
      deleteWarning: "Spremate se da obri\u0161ete opciju proizvoda: {{title}}. Ova radnja se ne mo\u017Ee poni\u0161titi."
    },
    organization: {
      header: "Organizovati",
      edit: {
        header: "Uredi Organizaciju",
        toasts: {
          success: "Uspe\u0161no a\u017Eurirana organizacija {{title}}."
        }
      }
    },
    toasts: {
      delete: {
        success: {
          header: "Proizvod obrisan",
          description: "{{title}} je uspje\u0161no obrisan."
        },
        error: {
          header: "Nije uspjelo brisanje proizvoda"
        }
      }
    }
  },
  collections: {
    domain: "Kolekcije",
    subtitle: "Organizuj proizvode u kolekcije.",
    createCollection: "Kreiraj Kolekciju",
    createCollectionHint: "Kreiraj novu kolekciju da organizuje\u0161 svoje proizvode.",
    createSuccess: "Kolekcija je uspje\u0161no kreirana.",
    editCollection: "Uredi Kolekciju",
    handleTooltip: "Ru\u010Dka se koristi za referenciranje kolekcije u tvojoj prodavnici. Ako nije navedeno, ru\u010Dka \u0107e biti generisana iz naslova kolekcije.",
    deleteWarning: "Spremate se da obri\u0161ete kolekciju {{title}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    removeSingleProductWarning: "Vi ste na putu da uklonite proizvod {{title}} iz kolekcije. Ova akcija se ne mo\u017Ee poni\u0161titi.",
    removeProductsWarning_one: "Ukloni\u0107e\u0161 {{count}} proizvod iz kolekcije. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    removeProductsWarning_other: "Ukloni\u0107e\u0161 {{count}} proizvoda iz kolekcije. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    products: {
      list: {
        noRecordsMessage: "Nema proizvoda u kolekciji."
      },
      add: {
        successToast_one: "Proizvod je uspje\u0161no dodat u kolekciju.",
        successToast_other: "Proizvodi su uspje\u0161no dodati u kolekciju."
      },
      remove: {
        successToast_one: "Proizvod je uspje\u0161no uklonjen iz kolekcije.",
        successToast_other: "Proizvodi su uspje\u0161no uklonjeni iz kolekcije."
      }
    }
  },
  categories: {
    domain: "Kategorije",
    subtitle: "Organizuj proizvode u kategorije, i upravljaj rangiranjem i hijerarhijom tih kategorija.",
    create: {
      header: "Kreiraj Kategoriju",
      hint: "Kreiraj novu kategoriju da organizuje\u0161 svoje proizvode.",
      tabs: {
        details: "Detalji",
        organize: "Organizovati Rangiranje"
      },
      successToast: "Kategorija {{name}} je uspje\u0161no kreirana."
    },
    edit: {
      header: "Izmijeni Kategoriju",
      description: "Izmijeni kategoriju da a\u017Eurira njene detalje.",
      successToast: "Kategorija je uspje\u0161no a\u017Eurirana."
    },
    delete: {
      confirmation: "Spremni ste da obri\u0161ete kategoriju {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Kategorija {{name}} je uspje\u0161no obrisana."
    },
    products: {
      add: {
        disabledTooltip: "Proizvod je ve\u0107 u ovoj kategoriji.",
        successToast_one: "Dodato {{count}} proizvoda u kategoriju.",
        successToast_other: "Dodato {{count}} proizvoda u kategoriju."
      },
      remove: {
        confirmation_one: "Spremate se da uklonite {{count}} proizvod iz kategorije. Ova akcija se ne mo\u017Ee poni\u0161titi.",
        confirmation_other: "Spremate se da uklonite {{count}} proizvoda iz kategorije. Ova radnja se ne mo\u017Ee poni\u0161titi.",
        successToast_one: "Uklonjen {{count}} proizvod iz kategorije.",
        successToast_other: "Uklonjeno {{count}} proizvoda iz kategorije."
      },
      list: {
        noRecordsMessage: "Nema proizvoda u kategoriji."
      }
    },
    organize: {
      header: "Organizovati",
      action: "Uredi rangiranje"
    },
    fields: {
      visibility: {
        label: "Vidljivost",
        internal: "Interni",
        public: "Javni"
      },
      status: {
        label: "Status",
        active: "Aktivan",
        inactive: "Neaktivan"
      },
      path: {
        label: "Put",
        tooltip: "Prika\u017Ei puni put kategorije."
      },
      children: {
        label: "Djeca"
      },
      new: {
        label: "Novi"
      }
    }
  },
  inventory: {
    domain: "Inventar",
    subtitle: "Upravljaj svojim inventarskim stavkama",
    reserved: "Rezervisan",
    available: "Dostupan",
    locationLevels: "Lokacije",
    associatedVariants: "Povezane varijante",
    manageLocations: "Upravljaj lokacijama",
    deleteWarning: "Spremate se da obri\u0161ete stavku u inventaru. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    editItemDetails: "Izmijeni detalje stavke",
    create: {
      title: "Kreiraj stavku inventara",
      details: "Detalji",
      availability: "Dostupnost",
      locations: "Lokacije",
      attributes: "Atributi",
      requiresShipping: "Zahteva isporuku",
      requiresShippingHint: "Da li stavka u inventaru zahtijeva isporuku?",
      successToast: "Stavka inventara je uspje\u0161no kreirana."
    },
    reservation: {
      header: "Rezervacija {{itemName}}",
      editItemDetails: "Izmijeni rezervaciju",
      lineItemId: "Stavka ID",
      orderID: "ID narud\u017Ebine",
      description: "Opis",
      location: "Lokacija",
      inStockAtLocation: "Na skladi\u0161tu na ovoj lokaciji",
      availableAtLocation: "Dostupno na ovoj lokaciji",
      reservedAtLocation: "Rezervisano na ovoj lokaciji",
      reservedAmount: "Rezervna koli\u010Dina",
      create: "Kreiraj rezervaciju",
      itemToReserve: "Stavka za rezervaciju",
      quantityPlaceholder: "Koliko \u017Eeli\u0161 da rezervi\u0161e\u0161?",
      descriptionPlaceholder: "Kakav tip rezervacije je ovo?",
      successToast: "Rezervacija je uspje\u0161no kreirana.",
      updateSuccessToast: "Rezervacija je uspje\u0161no a\u017Eurirana.",
      deleteSuccessToast: "Rezervacija je uspje\u0161no obrisana.",
      errors: {
        noAvaliableQuantity: "Lokacija skladi\u0161ta nema dostupnu koli\u010Dinu.",
        quantityOutOfRange: "Minimalna koli\u010Dina je 1, a maksimalna koli\u010Dina je {{max}}"
      }
    },
    toast: {
      updateLocations: "Lokacije su uspje\u0161no a\u017Eurirane.",
      updateLevel: "Nivo inventara je uspje\u0161no a\u017Euriran.",
      updateItem: "Stavka inventara uspje\u0161no a\u017Eurirana."
    }
  },
  giftCards: {
    domain: "Poklon kartice",
    editGiftCard: "Izmijeni Poklon Karticu",
    createGiftCard: "Kreiraj Poklon Karticu",
    createGiftCardHint: "Ru\u010Dno kreirajte poklon karticu koja se mo\u017Ee koristiti kao metoda pla\u0107anja u va\u0161oj prodavnici.",
    selectRegionFirst: "Odaberi region prvo",
    deleteGiftCardWarning: "Spremate se da obri\u0161ete poklon karticu {{code}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    balanceHigherThanValue: "Ravnote\u017Ea ne mo\u017Ee biti vi\u0161a od originalnog iznosa.",
    balanceLowerThanZero: "Ravnote\u017Ea ne mo\u017Ee biti negativna.",
    expiryDateHint: "Zemlje imaju razli\u010Dite zakone u vezi sa rokovima isteka poklon kartica. Obavezno proverite lokalne propise pre nego \u0161to postavite rok isteka.",
    regionHint: "Menjanje regije poklon kartice \u0107e tako\u0111e promeniti njenu valutu, potencijalno uti\u010Du\u0107i na njenu nov\u010Danu vrednost.",
    enabledHint: "Odredi da li je poklon kartica omogu\u0107ena ili onemogu\u0107ena.",
    balance: "Ravnote\u017Ea",
    currentBalance: "Trenutni saldo",
    initialBalance: "Po\u010Detno stanje",
    personalMessage: "Li\u010Dna poruka",
    recipient: "Primalac"
  },
  customers: {
    domain: "Kupci",
    list: {
      noRecordsMessage: "Va\u0161i kupci \u0107e se pojaviti ovdje."
    },
    create: {
      header: "Kreiraj Kupca",
      hint: "Kreiraj novog kupca i upravljaj njihovim podacima.",
      successToast: "Kupac {{email}} je uspje\u0161no kreiran."
    },
    groups: {
      label: "Grupacije kupaca",
      remove: 'Da li ste sigurni da \u017Eelite da uklonite kupca iz "{{name}}" grupe kupaca?',
      removeMany: "Da li ste sigurni da \u017Eelite da kupite od slede\u0107ih kupaca: {{groups}}?",
      alreadyAddedTooltip: "Kupac je ve\u0107 u ovoj grupi kupaca.",
      list: {
        noRecordsMessage: "Ovaj kupac ne pripada nijednoj grupi."
      },
      add: {
        success: "Kupac dodat u: {{grupe}}.",
        list: {
          noRecordsMessage: "Molimo vas da prvo kreirate grupu kupaca."
        }
      },
      removed: {
        success: "Kupac uklonjen iz: {{grupe}}.",
        list: {
          noRecordsMessage: "Molimo vas da prvo kreirate grupu kupaca."
        }
      }
    },
    edit: {
      header: "Izmijeni Kupca",
      emailDisabledTooltip: "Email adresa se ne mo\u017Ee promijeniti za registrovane kupce.",
      successToast: "Kupac {{email}} je uspje\u0161no a\u017Euriran."
    },
    delete: {
      title: "Obri\u0161i Kupca",
      description: "Spremate se da obri\u0161ete kupca {{email}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Kupac {{email}} je uspje\u0161no obrisan."
    },
    fields: {
      guest: "Gost",
      registered: "Registrovan",
      groups: "Grupe"
    },
    registered: "Registrovan",
    guest: "Gost",
    hasAccount: "Ima ra\u010Dun"
  },
  customerGroups: {
    domain: "Kupac Grupe",
    subtitle: "Organizovati kupce u grupe. Grupe mogu imati razli\u010Dite promocije i cene.",
    create: {
      header: "Kreiraj Grupu Kupaca",
      hint: "Kreiraj novu grupu kupaca da segmentira\u0161 svoje kupce.",
      successToast: "Grupa kupaca {{name}} je uspje\u0161no kreirana."
    },
    edit: {
      header: "Izmijeni Grupu Kupaca",
      successToast: "Grupa kupaca {{name}} je uspje\u0161no a\u017Eurirana."
    },
    delete: {
      title: "Obri\u0161i grupu kupaca",
      description: "Spremate se da obri\u0161ete grupu kupaca {{name}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
      successToast: "Grupa kupaca {{name}} je uspje\u0161no obrisana."
    },
    customers: {
      alreadyAddedTooltip: "Kupac je ve\u0107 dodat u grupu.",
      add: {
        successToast_one: "Kupac je uspje\u0161no dodat u grupu.",
        successToast_other: "Kupci su uspje\u0161no dodati u grupu.",
        list: {
          noRecordsMessage: "Kreiraj kupca prvo."
        }
      },
      remove: {
        title_one: "Ukloni kupca",
        title_other: "Ukloni kupce",
        description_one: "Spremate se da uklonite {{count}} kupca iz grupe kupaca. Ova akcija se ne mo\u017Ee poni\u0161titi.",
        description_other: "Ukloni\u0107e\u0161 {{count}} kupaca iz grupe kupaca. Ova akcija se ne mo\u017Ee poni\u0161titi."
      },
      list: {
        noRecordsMessage: "Ova grupa nema kupaca."
      }
    }
  },
  orders: {
    domain: "Naru\u010Divanja",
    claim: "Potra\u017Eivanje",
    exchange: "Razmjena",
    return: "Vrati",
    cancelWarning: "Vi ste na putu da otka\u017Eete narud\u017Ebinu {{id}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    onDateFromSalesChannel: "{{datum}} iz {{kanalProdaje}}",
    list: {
      noRecordsMessage: "Va\u0161e narud\u017Ebe \u0107e se pojaviti ovdje."
    },
    summary: {
      requestReturn: "Zahtev povratak",
      allocateItems: "Dodeli stavke",
      editOrder: "Izmijeni narud\u017Ebinu",
      editOrderContinue: "Nastavi redoslijed ure\u0111ivanja",
      inventoryKit: "Sadr\u017Ei {{count}}x inventar stavki",
      itemTotal: "Stavka Ukupno",
      shippingTotal: "Ukupno za dostavu",
      discountTotal: "Popust Ukupno",
      taxTotalIncl: "Porez Ukupno (uklju\u010Deno)",
      itemSubtotal: "Stavka Ukupno",
      shippingSubtotal: "Isporuka Ukupno",
      discountSubtotal: "Popust Ukupno",
      taxTotal: "Porez Ukupno"
    },
    payment: {
      title: "Pla\u0107anja",
      isReadyToBeCaptured: "Pla\u0107anje <0/> je spremno za preuzimanje.",
      totalPaidByCustomer: "Ukupno pla\u0107eno od kupca",
      capture: "Zabilje\u017Ei uplatu",
      capture_short: "Zarobljavanje",
      refund: "Povra\u0107aj",
      markAsPaid: "Ozna\u010Di kao pla\u0107eno",
      statusLabel: "Status pla\u0107anja",
      statusTitle: "Status Pla\u0107anja",
      status: {
        notPaid: "Nije pla\u0107eno",
        authorized: "Ovla\u0161\u0107en",
        partiallyAuthorized: "Djelimi\u010Dno ovla\u0161\u0107en",
        awaiting: "\u010Cekanje",
        captured: "Zarobljen",
        partiallyRefunded: "Djelimi\u010Dno refundirano",
        partiallyCaptured: "Djelimi\u010Dno uhva\u0107eno",
        refunded: "Refundiran",
        canceled: "Otka\u017Eeno",
        requiresAction: "Zahteva akciju"
      },
      capturePayment: "Pla\u0107anje od {{amount}} \u0107e biti zabilje\u017Eeno.",
      capturePaymentSuccess: "Pla\u0107anje od {{amount}} uspje\u0161no zabilje\u017Eeno",
      markAsPaidPayment: "Pla\u0107anje od {{amount}} bi\u0107e ozna\u010Deno kao pla\u0107eno.",
      markAsPaidPaymentSuccess: "Pla\u0107anje od {{amount}} uspje\u0161no ozna\u010Deno kao pla\u0107eno",
      createRefund: "Kreirati Povratak",
      refundPaymentSuccess: "Povrat novca u iznosu {{amount}} uspje\u0161an",
      createRefundWrongQuantity: "Koli\u010Dina treba da bude broj izme\u0111u 1 i {{number}}",
      refundAmount: "Povrat {{ amount }}",
      paymentLink: "Kopiraj link za uplatu za {{ amount }}",
      selectPaymentToRefund: "Izaberi uplatu za povratak"
    },
    edits: {
      title: "Izmijeni narud\u017Ebinu",
      confirm: "Potvrdi Ure\u0111ivanje",
      confirmText: "Spremni ste da potvrdite izmjenu narud\u017Ebe. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      cancel: "Otka\u017Ei Uredi",
      currentItems: "Trenutni predmeti",
      currentItemsDescription: "Pode\u0161avanje koli\u010Dine stavke ili uklanjanje.",
      addItemsDescription: "Mo\u017Ee\u0161 dodati nove stavke u narud\u017Ebinu.",
      addItems: "Dodaj stavke",
      amountPaid: "Iznos pla\u0107en",
      newTotal: "Novi ukupno",
      differenceDue: "Razlika zbog",
      create: "Izmijeni Narud\u017Ebinu",
      currentTotal: "Trenutni ukupni",
      noteHint: "Dodaj unutra\u0161nju napomenu za izmjenu",
      cancelSuccessToast: "Nalog ure\u0111ivanja otkazan",
      createSuccessToast: "Zahtev za ure\u0111ivanje narud\u017Ebine kreiran",
      activeChangeError: "Ve\u0107 postoji aktivna promjena narud\u017Ebe na narud\u017Ebi (povrat, reklamacija, razmjena itd.). Molimo zavr\u0161ite ili otka\u017Eite promjenu prije nego \u0161to uredite narud\u017Ebu.",
      panel: {
        title: "Zahtev za izmjenu narud\u017Ebine",
        titlePending: "Naru\u010Divanje ure\u0111ivanja na \u010Dekanju"
      },
      toast: {
        canceledSuccessfully: "Nalog ure\u0111ivanje otkazano",
        confirmedSuccessfully: "Potvr\u0111ena izmjena narud\u017Ebine"
      },
      validation: {
        quantityLowerThanFulfillment: "Ne mo\u017Ee se postaviti koli\u010Dina da bude manja ili jednaka ispunjenoj koli\u010Dini"
      }
    },
    returns: {
      create: "Kreiraj Vratiti",
      confirm: "Potvrdi povratak",
      confirmText: "Spremni ste da potvrdite Povratak. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      inbound: "Ulazni",
      outbound: "Izlazni",
      sendNotification: "Po\u0161alji obavje\u0161tenje",
      sendNotificationHint: "Obavijesti kupca o povratu.",
      returnTotal: "Vrati ukupno",
      inboundTotal: "Ulazni ukupno",
      refundAmount: "Iznos povrata",
      outstandingAmount: "Iznos koji se duguje",
      reason: "Razlog",
      reasonHint: "Odaberi za\u0161to kupac \u017Eeli da vrati artikle.",
      note: "Napomena",
      noInventoryLevel: "Nema nivoa zaliha",
      noInventoryLevelDesc: "Odabrana lokacija nema nivo zaliha za odabrane stavke. Povratak se mo\u017Ee zatra\u017Eiti, ali se ne mo\u017Ee primiti dok se ne kreira nivo zaliha za odabranu lokaciju.",
      noteHint: "Mo\u017Ee\u0161 slobodno kucati ako \u017Eeli\u0161 da ne\u0161to precizira\u0161.",
      location: "Lokacija",
      locationHint: "Odaberi koju lokaciju \u017Eeli\u0161 da vrati\u0161 predmete.",
      inboundShipping: "Povratna po\u0161tarina",
      inboundShippingHint: "Izaberi koju metodu \u017Eeli\u0161 da koristi\u0161.",
      returnableQuantityLabel: "Povratna koli\u010Dina",
      refundableAmountLabel: "Povratni iznos",
      returnRequestedInfo: "{{requestedItemsCount}}x stavki vra\u0107enih na zahtev",
      returnReceivedInfo: "{{requestedItemsCount}}x stavki povratak primljen",
      itemReceived: "Stavke primljene",
      returnRequested: "Povratak zatra\u017Een",
      damagedItemReceived: "O\u0161te\u0107eni predmeti primljeni",
      damagedItemsReturned: "{{quantity}}x o\u0161te\u0107enih predmeta vra\u0107enih",
      activeChangeError: "Postoji aktivna promjena narud\u017Ebine u toku na ovoj narud\u017Ebini. Molimo vas da prvo zavr\u0161ite ili odbacite promjenu.",
      cancel: {
        title: "Otka\u017Ei Povratak",
        description: "Da li ste sigurni da \u017Eelite da otka\u017Eete zahtev za povratak?"
      },
      placeholders: {
        noReturnShippingOptions: {
          title: "Nema opcija za povratnu dostavu",
          hint: "Nema opcija za povratnu dostavu koje su kreirane za lokaciju. Mo\u017Eete kreirati jednu na <LinkComponent>Lokacija & Dostava</LinkComponent>."
        },
        outboundShippingOptions: {
          title: "Nema opcija za izlaznu isporuku",
          hint: "Nema opcija za otpremu prema van koje su kreirane za lokaciju. Mo\u017Eete kreirati jednu na <LinkComponent>Lokacija & Otprema</LinkComponent>."
        }
      },
      receive: {
        action: "Primiti stavke",
        receiveItems: "{{ povratniTip }} {{ id }}",
        restockAll: "Ponovno napuniti sve stavke",
        itemsLabel: "Stavke primljene",
        title: "Primite stavke za #{{returnId}}",
        sendNotificationHint: "Obavijesti kupca o primljenom vra\u0107anju.",
        inventoryWarning: "Molimo vas da imate u vidu da \u0107emo automatski prilagoditi nivoe zaliha na osnovu va\u0161eg unosa iznad.",
        writeOffInputLabel: "Koliko od stavki je o\u0161te\u0107eno?",
        toast: {
          success: "Povratak primljen uspje\u0161no.",
          errorLargeValue: "Koli\u010Dina je ve\u0107a od tra\u017Eene koli\u010Dine stavke.",
          errorNegativeValue: "Koli\u010Dina ne mo\u017Ee biti negativna vrijednost.",
          errorLargeDamagedValue: "Koli\u010Dina o\u0161te\u0107enih stavki + koli\u010Dina ne o\u0161te\u0107enih primljenih stavki prema\u0161uje ukupnu koli\u010Dinu stavki na povratu. Molimo smanjite koli\u010Dinu ne o\u0161te\u0107enih stavki."
        }
      },
      toast: {
        canceledSuccessfully: "Povratak otkazan uspje\u0161no",
        confirmedSuccessfully: "Povratak potvr\u0111en uspje\u0161no"
      },
      panel: {
        title: "Povratak iniciran",
        description: "Postoji otvoren zahtev za povratak koji treba da se zavr\u0161i"
      }
    },
    claims: {
      create: "Kreiraj Potra\u017Eivanje",
      confirm: "Potvrdi Potra\u017Eivanje",
      confirmText: "Spremni ste da potvrdite zahtjev. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      manage: "Upravljaj Potra\u017Enjom",
      outbound: "Izlazni",
      outboundItemAdded: "{{itemsCount}}x dodato kroz zahtjev",
      outboundTotal: "Izlazni ukupno",
      outboundShipping: "Izlazna isporuka",
      outboundShippingHint: "Izaberi koju metodu \u017Eeli\u0161 da koristi\u0161.",
      refundAmount: "Procijenjena razlika",
      activeChangeError: "Postoji aktivna promjena narud\u017Ebe na ovoj narud\u017Ebi. Molimo zavr\u0161ite ili odbacite prethodnu promjenu.",
      actions: {
        cancelClaim: {
          successToast: "Zahtev je uspje\u0161no otkazan."
        }
      },
      cancel: {
        title: "Otka\u017Ei zahtjev",
        description: "Da li ste sigurni da \u017Eelite da otka\u017Eete zahtev?"
      },
      tooltips: {
        onlyReturnShippingOptions: "Ova lista \u0107e se sastojati samo od opcija za povratnu isporuku."
      },
      toast: {
        canceledSuccessfully: "Potra\u017Eivanje otkazano uspje\u0161no",
        confirmedSuccessfully: "Potvrda zahtjeva uspje\u0161no izvr\u0161ena"
      },
      panel: {
        title: "Zahtev pokrenut",
        description: "Postoji otvoren zahtjev za reklamaciju koji treba da se zavr\u0161i"
      }
    },
    exchanges: {
      create: "Kreiraj Razmjenu",
      manage: "Upravljaj Razmjenom",
      confirm: "Potvrdi Razmjenu",
      confirmText: "Vi ste na putu da potvrdite razmjenu. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      outbound: "Izlazni",
      outboundItemAdded: "{{itemsCount}}x dodato kroz razmjenu",
      outboundTotal: "Izlazni ukupno",
      outboundShipping: "Izlazna isporuka",
      outboundShippingHint: "Izaberi koju metodu \u017Eeli\u0161 da koristi\u0161.",
      refundAmount: "Procijenjena razlika",
      activeChangeError: "Postoji aktivna promjena narud\u017Ebe na ovoj narud\u017Ebi. Molimo vas da zavr\u0161ite ili odbacite prethodnu promjenu.",
      actions: {
        cancelExchange: {
          successToast: "Razmjena je uspje\u0161no otkazana."
        }
      },
      cancel: {
        title: "Otka\u017Ei razmjenu",
        description: "Da li ste sigurni da \u017Eelite da otka\u017Eete razmjenu?"
      },
      tooltips: {
        onlyReturnShippingOptions: "Ova lista \u0107e se sastojati samo od opcija za povratnu dostavu."
      },
      toast: {
        canceledSuccessfully: "Razmjena otkazana uspje\u0161no",
        confirmedSuccessfully: "Razmjena potvr\u0111ena uspje\u0161no"
      },
      panel: {
        title: "Razmjena inicirana",
        description: "Postoji otvoren zahtjev za razmjenu koji treba da se zavr\u0161i"
      }
    },
    reservations: {
      allocatedLabel: "Dodeljeno",
      notAllocatedLabel: "Nije alocirano"
    },
    allocateItems: {
      action: "Dodeli stavke",
      title: "Dodeli stavke narud\u017Ebine",
      locationDescription: "Odaberi koju lokaciju \u017Eeli\u0161 da alocira\u0161.",
      itemsToAllocate: "Stavke za alokaciju",
      itemsToAllocateDesc: "Odaberi broj stavki koje \u017Eeli\u0161 da dodeli\u0161",
      search: "Pretra\u017Eiti stavke",
      consistsOf: "Sastoji se od {{num}}x inventar stavki",
      requires: "Zahteva {{num}} po varijanti",
      toast: {
        created: "Stavke uspje\u0161no alocirane"
      },
      error: {
        quantityNotAllocated: "Postoje nealokirani predmeti."
      }
    },
    shipment: {
      title: "Mark ispunjenje otpremljeno",
      trackingNumber: "Broj za pra\u0107enje",
      addTracking: "Dodaj broj za pra\u0107enje",
      sendNotification: "Po\u0161alji obavje\u0161tenje",
      sendNotificationHint: "Obavijesti kupca o ovoj po\u0161iljci.",
      toastCreated: "Po\u0161iljka je uspje\u0161no kreirana."
    },
    fulfillment: {
      cancelWarning: "Spremate se da otka\u017Eete ispunjenje. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      markAsDeliveredWarning: "Spremni ste da ozna\u010Dite ispunjenje kao isporu\u010Deno. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      unfulfilledItems: "Nepotpuni predmeti",
      statusLabel: "Status ispunjenja",
      statusTitle: "Status ispunjenja",
      fulfillItems: "Ispuniti stavke",
      awaitingFulfillmentBadge: "\u010Cekanje ispunjenja",
      requiresShipping: "Zahteva isporuku",
      number: "Ispunjenje #{{number}}",
      itemsToFulfill: "Stavke za ispunjenje",
      create: "Kreirati Ispunjenje",
      available: "Dostupan",
      inStock: "Na skladi\u0161tu",
      markAsShipped: "Ozna\u010Di kao otpremljeno",
      markAsDelivered: "Ozna\u010Di kao isporu\u010Deno",
      itemsToFulfillDesc: "Odaberi stavke i koli\u010Dine za ispunjavanje",
      locationDescription: "Izaberi koju lokaciju \u017Eeli\u0161 da ispuni\u0161 stavke iz.",
      sendNotificationHint: "Obavijestite kupce o kreiranom ispunjenju.",
      methodDescription: "Izaberi druga\u010Diji na\u010Din isporuke od onog koji je kupac odabrao",
      error: {
        wrongQuantity: "Samo jedna stavka je dostupna za ispunjenje",
        wrongQuantity_other: "Koli\u010Dina treba da bude broj izme\u0111u 1 i {{number}}",
        noItems: "Nema stavki za ispunjavanje."
      },
      status: {
        notFulfilled: "Nije ispunjeno",
        partiallyFulfilled: "Djelimi\u010Dno ispunjeno",
        fulfilled: "Ispunjen",
        partiallyShipped: "Djelimi\u010Dno otpremljeno",
        shipped: "Poslato",
        delivered: "Isporu\u010Deno",
        partiallyDelivered: "Djelimi\u010Dno isporu\u010Deno",
        partiallyReturned: "Djelimi\u010Dno vra\u0107eno",
        returned: "Vra\u0107en",
        canceled: "Otka\u017Eeno",
        requiresAction: "Zahteva akciju"
      },
      toast: {
        created: "Ispunjenje je uspje\u0161no kreirano",
        canceled: "Ispunjenje uspje\u0161no otkazano",
        fulfillmentShipped: "Ne mo\u017Ee\u0161 otkazati ve\u0107 otpremljenu ispunu",
        fulfillmentDelivered: "Ispunjenje ozna\u010Deno kao uspje\u0161no isporu\u010Deno"
      },
      trackingLabel: "Pra\u0107enje",
      shippingFromLabel: "\u0160aljenje od",
      itemsLabel: "Stavke"
    },
    refund: {
      title: "Kreirati Povratak",
      sendNotificationHint: "Obavijestite kupce o kreiranom povratu.",
      systemPayment: "Sistem pla\u0107anja",
      systemPaymentDesc: "Jedna ili vi\u0161e tvojih uplata je sistemska uplata. Budi svestan da Medusa ne obra\u0111uje zadr\u017Eavanja i povra\u0107aje za takve uplate.",
      error: {
        amountToLarge: "Ne mo\u017Ee se refundirati vi\u0161e od originalnog iznosa narud\u017Ebine.",
        amountNegative: "Iznos povrata mora biti pozitivan broj.",
        reasonRequired: "Molimo vas da odaberete razlog za povrat."
      }
    },
    customer: {
      contactLabel: "Kontakt",
      editEmail: "Izmeni email",
      transferOwnership: "Prenos vlasni\u0161tva",
      editBillingAddress: "Izmeni adresu za naplatu",
      editShippingAddress: "Izmijeni adresu za isporuku"
    },
    activity: {
      header: "Aktivnost",
      showMoreActivities_one: "Prika\u017Ei {{count}} vi\u0161e aktivnosti",
      showMoreActivities_other: "Prika\u017Ei {{count}} vi\u0161e aktivnosti",
      comment: {
        label: "Komentar",
        placeholder: "Ostavi komentar",
        addButtonText: "Dodaj komentar",
        deleteButtonText: "Obri\u0161i komentar"
      },
      events: {
        common: {
          toReturn: "Da vrati\u0161",
          toSend: "Da po\u0161aljem"
        },
        placed: {
          title: "Porud\u017Ebina postavljena",
          fromSalesChannel: "od {{salesChannel}}"
        },
        canceled: {
          title: "Naru\u010Divanje otkazano"
        },
        payment: {
          awaiting: "\u010Cekanje uplate",
          captured: "Pla\u0107anje zabilje\u017Eeno",
          canceled: "Pla\u0107anje otkazano",
          refunded: "Povrat novca"
        },
        fulfillment: {
          created: "Stavke ispunjene",
          canceled: "Ispunjenje otkazano",
          shipped: "Stavke otpremljene",
          delivered: "Stavke isporu\u010Dene",
          items_one: "{{count}} stavka",
          items_other: "{{count}} stavki"
        },
        return: {
          created: "Vrati #{{returnId}} zatra\u017Eeno",
          canceled: "Vrati #{{returnId}} otkazan",
          received: "Povratak #{{returnId}} primljen",
          items_one: "{{count}} stavka vra\u0107ena",
          items_other: "{{count}} stavki vra\u0107eno"
        },
        note: {
          comment: "Komentar",
          byLine: "od {{author}}"
        },
        claim: {
          created: "Zahtev #{{claimId}} zatra\u017Een",
          canceled: "Potra\u017Eivanje #{{claimId}} otkazano",
          itemsInbound: "{{count}} stavka za vra\u0107anje",
          itemsOutbound: "{{count}} stavka za slanje"
        },
        exchange: {
          created: "Razmjena #{{exchangeId}} zatra\u017Eena",
          canceled: "Razmjena #{{exchangeId}} otkazana",
          itemsInbound: "{{count}} stavka za vra\u0107anje",
          itemsOutbound: "{{count}} stavka za slanje"
        },
        edit: {
          requested: "Nalog za ure\u0111ivanje #{{editId}} zatra\u017Een",
          confirmed: "Nalog ure\u0111ivanje #{{editId}} potvr\u0111eno"
        }
      }
    },
    fields: {
      displayId: "Prikaz ID",
      refundableAmount: "Povratni iznos",
      returnableQuantity: "Povratna koli\u010Dina"
    }
  },
  draftOrders: {
    domain: "Nacrt Naru\u0111bina",
    deleteWarning: "Spremate se da obri\u0161ete nacrt narud\u017Ebe {{id}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    paymentLinkLabel: "Link za pla\u0107anje",
    cartIdLabel: "ID korpe",
    markAsPaid: {
      label: "Ozna\u010Di kao pla\u0107eno",
      warningTitle: "Ozna\u010Di kao Pla\u0107eno",
      warningDescription: "Spremni ste da ozna\u010Dite redoslijed nacrta kao pla\u0107en. Ova radnja se ne mo\u017Ee poni\u0161titi, a prikupljanje uplate ne\u0107e biti mogu\u0107e kasnije."
    },
    status: {
      open: "Otvoren",
      completed: "Zavr\u0161eno"
    },
    create: {
      createDraftOrder: "Kreiraj Nacrt Redoslijed",
      createDraftOrderHint: "Kreiraj novu narud\u017Ebinu za upravljanje detaljima narud\u017Ebine prije nego \u0161to bude postavljena.",
      chooseRegionHint: "Izaberi region",
      existingItemsLabel: "Postoje\u0107i predmeti",
      existingItemsHint: "Dodaj postoje\u0107e proizvode u nacrt narud\u017Ebine.",
      customItemsLabel: "Prilago\u0111eni predmeti",
      customItemsHint: "Dodaj prilago\u0111ene stavke u redosled nacrta.",
      addExistingItemsAction: "Dodaj postoje\u0107e stavke",
      addCustomItemAction: "Dodaj prilago\u0111eni predmet",
      noCustomItemsAddedLabel: "Nema prilago\u0111enih stavki dodanih jo\u0161",
      noExistingItemsAddedLabel: "Nema postoje\u0107ih stavki dodanih jo\u0161.",
      chooseRegionTooltip: "Odaberi region prvo",
      useExistingCustomerLabel: "Koristi postoje\u0107eg kupca",
      addShippingMethodsAction: "Dodaj metode isporuke",
      unitPriceOverrideLabel: "Jedini\u010Dna cijena preklapanje",
      shippingOptionLabel: "Opcija dostave",
      shippingOptionHint: "Izaberi opciju dostave za nacrt narud\u017Ebe.",
      shippingPriceOverrideLabel: "Cijena dostave preklapanje",
      shippingPriceOverrideHint: "Prekini cijenu dostave za nacrt narud\u017Ebe.",
      sendNotificationLabel: "Po\u0161alji obavje\u0161tenje",
      sendNotificationHint: "Po\u0161alji obavje\u0161tenje kupcu kada se kreira nacrt narud\u017Ebe."
    },
    validation: {
      requiredEmailOrCustomer: "Email ili kupac je obavezan.",
      requiredItems: "Najmanje jedan predmet je obavezan.",
      invalidEmail: "Email mora biti va\u017Ee\u0107a email adresa."
    }
  },
  stockLocations: {
    domain: "Lokacije i dostava",
    list: {
      description: "Upravljajte lokacijama skladi\u0161ta i opcijama dostave va\u0161e prodavnice."
    },
    create: {
      header: "Kreiraj Lokaciju Zaliha",
      hint: "Lokacija zaliha je fizi\u010Dko mesto gde se proizvodi skladi\u0161te i otpremaju.",
      successToast: "Lokacija {{name}} je uspje\u0161no kreirana."
    },
    edit: {
      header: "Izmijeni Lokaciju Zaliha",
      viewInventory: "Pogledaj inventar",
      successToast: "Lokacija {{name}} je uspje\u0161no a\u017Eurirana."
    },
    delete: {
      confirmation: "Spremate se da obri\u0161ete lokaciju skladi\u0161ta {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi."
    },
    fulfillmentProviders: {
      header: "Ispunjenje Pru\u017Eatelji",
      shippingOptionsTooltip: "Ova padaju\u0107a lista \u0107e se sastojati samo od pru\u017Eatelja usluga omogu\u0107enih za ovu lokaciju. Dodajte ih u lokaciju ako je padaju\u0107a lista onemogu\u0107ena.",
      label: "Povezani pru\u017Eaoci ispunjenja",
      connectedTo: "Povezano sa {{count}} od {{total}} pru\u017Eatelja ispunjenja",
      noProviders: "Ova Lokacija Zaliha nije povezana sa nijednim provajderom ispunjenja.",
      action: "Pove\u017Ei Pru\u017Eaoce",
      successToast: "Provajderi ispunjenja za lokaciju zaliha su uspje\u0161no a\u017Eurirani."
    },
    fulfillmentSets: {
      pickup: {
        header: "Pickup - preuzimanje"
      },
      shipping: {
        header: "\u0160aljenje"
      },
      disable: {
        confirmation: "Da li ste sigurni da \u017Eelite da onemogu\u0107ite {{name}}? Ovo \u0107e obrisati sve povezane servisne zone i opcije dostave, i ne mo\u017Ee se poni\u0161titi.",
        pickup: "Pickup je uspje\u0161no onemogu\u0107en.",
        shipping: "\u0160aljenje je uspje\u0161no onemogu\u0107eno."
      },
      enable: {
        pickup: "Pickup je uspje\u0161no omogu\u0107en.",
        shipping: "\u0160aljenje je uspje\u0161no omogu\u0107eno."
      }
    },
    sidebar: {
      header: "Konfiguracija isporuke",
      shippingProfiles: {
        label: "\u0160pediterski profili",
        description: "Grupiraj proizvode prema zahtjevima za isporuku"
      }
    },
    salesChannels: {
      header: "Prodajni kanali",
      label: "Povezani prodajni kanali",
      connectedTo: "Povezano sa {{count}} od {{total}} prodajnih kanala",
      noChannels: "Lokacija nije povezana sa nijednim prodajnim kanalima.",
      action: "Pove\u017Ei prodajne kanale",
      successToast: "Prodajni kanali su uspje\u0161no a\u017Eurirani."
    },
    shippingOptions: {
      create: {
        shipping: {
          header: "Kreiraj Opciju Dostave za {{zona}}",
          hint: "Kreiraj novu opciju dostave da defini\u0161e\u0161 kako se proizvodi \u0161alju sa ove lokacije.",
          label: "Opcije dostave",
          successToast: "Opcija dostave {{name}} je uspje\u0161no kreirana."
        },
        returns: {
          header: "Kreiraj opciju za povratak za {{zone}}",
          hint: "Kreiraj novu opciju vra\u0107anja da defini\u0161e\u0161 kako se proizvodi vra\u0107aju na ovu lokaciju.",
          label: "Povratne opcije",
          successToast: "Povratna opcija {{name}} je uspje\u0161no kreirana."
        },
        tabs: {
          details: "Detalji",
          prices: "Cijene"
        },
        action: "Kreiraj opciju"
      },
      delete: {
        confirmation: "Spremate se da obri\u0161ete opciju dostave {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
        successToast: "Opcija dostave {{name}} je uspje\u0161no obrisana."
      },
      edit: {
        header: "Izmeni Opciju Dostave",
        action: "Opcija ure\u0111ivanja",
        successToast: "Opcija dostave {{name}} je uspje\u0161no a\u017Eurirana."
      },
      pricing: {
        action: "Izmeni cijene"
      },
      fields: {
        count: {
          shipping_one: "{{count}} opcija dostave",
          shipping_other: "{{count}} opcija dostave",
          returns_one: "{{count}} opcija povratka",
          returns_other: "{{count}} opcije povratka"
        },
        priceType: {
          label: "Tip cijene",
          options: {
            fixed: {
              label: "Fiksni",
              hint: "Cijena opcije dostave je fiksna i ne mijenja se na osnovu sadr\u017Eaja narud\u017Ebe."
            },
            calculated: {
              label: "Izra\u010Dunato",
              hint: "Cijena opcije dostave se obra\u010Dunava od strane pru\u017Eaoca usluga prilikom naplate."
            }
          }
        },
        enableInStore: {
          label: "Omogu\u0107i u prodavnici",
          hint: "Da li kupci mogu koristiti ovu opciju tokom naplate."
        },
        provider: "Pru\u017Ealac ispunjenja",
        profile: "\u0160aljivi profil"
      }
    },
    serviceZones: {
      create: {
        headerPickup: "Kreiraj Servisnu Zon\u0443 za Preuzimanje iz {{lokacija}}",
        headerShipping: "Kreiraj Servisnu Zon\u0443 za \u0160pediteljstvo iz {{lokacija}}",
        action: "Kreiraj servisnu zonu",
        successToast: "Servisna zona {{name}} je uspje\u0161no kreirana."
      },
      edit: {
        header: "Izmijeni Servisnu Zonu",
        successToast: "Servisna zona {{name}} je uspje\u0161no a\u017Eurirana."
      },
      delete: {
        confirmation: "Spremate se da obri\u0161ete servisnu zonu {{name}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
        successToast: "Servisna zona {{name}} je uspje\u0161no obrisana."
      },
      manageAreas: {
        header: "Upravljaj oblastima za {{name}}",
        action: "Upravljaj podru\u010Djima",
        label: "Oblasti",
        hint: "Odaberi geografska podru\u010Dja koja pokriva zona usluge.",
        successToast: "Oblasti za {{name}} su uspje\u0161no a\u017Eurirane."
      },
      fields: {
        noRecords: "Nema servisnih zona za dodavanje opcija dostave.",
        tip: "Servisna zona je skup geografskih zona ili podru\u010Dja. Koristi se za ograni\u010Davanje dostupnih opcija isporuke na definisan skup lokacija."
      }
    }
  },
  shippingProfile: {
    domain: "\u0160pediterski profili",
    subtitle: "Grupiraj proizvode sa sli\u010Dnim zahtevima za isporuku u profile.",
    create: {
      header: "Kreiraj profil za dostavu",
      hint: "Kreiraj novi profil za isporuku da grupi\u0161e proizvode sa sli\u010Dnim zahtevima za isporuku.",
      successToast: "Profil za isporuku {{name}} je uspje\u0161no kreiran."
    },
    delete: {
      title: "Obri\u0161i profil dostave",
      description: "Spremate se da obri\u0161ete profil dostave {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Profil isporuke {{name}} je uspje\u0161no obrisan."
    },
    tooltip: {
      type: "Unesite tip profila za isporuku, na primjer: Te\u017Eak, Prevelik, Samo teret, itd."
    }
  },
  taxRegions: {
    domain: "Poreske regije",
    list: {
      hint: "Upravljaj onim \u0161to napla\u0107uje\u0161 svojim kupcima kada kupuju iz razli\u010Ditih zemalja i regiona."
    },
    delete: {
      confirmation: "Spremate se da obri\u0161ete poresku regiju. Ova akcija se ne mo\u017Ee poni\u0161titi.",
      successToast: "Poreska oblast je uspje\u0161no obrisana."
    },
    create: {
      header: "Kreiraj poresku regiju",
      hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu zemlju.",
      errors: {
        rateIsRequired: "Poreska stopa je potrebna prilikom kreiranja podrazumevane poreske stope.",
        nameIsRequired: "Ime je obavezno prilikom kreiranja podrazumijevaju\u0107e poreske stope."
      },
      successToast: "Poreska oblast je uspje\u0161no kreirana."
    },
    province: {
      header: "Pokrajine",
      create: {
        header: "Kreiraj Poresku Regiju Pokrajine",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu pokrajinu."
      }
    },
    state: {
      header: "Dr\u017Eave",
      create: {
        header: "Kreiraj poresku regiju dr\u017Eave",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu dr\u017Eavu."
      }
    },
    stateOrTerritory: {
      header: "Dr\u017Eave ili Teritorije",
      create: {
        header: "Kreiraj Dr\u017Eavnu/Teritorijalnu Poresku Regiju",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu dr\u017Eavu/teritoriju."
      }
    },
    county: {
      header: "Okruzi",
      create: {
        header: "Kreiraj Okru\u017Enu Poreznu Regiju",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu op\u0161tinu."
      }
    },
    region: {
      header: "Regije",
      create: {
        header: "Kreiraj Region Poreznu Regiju",
        hint: "Kreiraj novu poresku oblast da defini\u0161e\u0161 poreske stope za specifi\u010Dnu oblast."
      }
    },
    department: {
      header: "Odeljenja",
      create: {
        header: "Kreiraj Odeljenje Poreska Regija",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111eni odeljak."
      }
    },
    territory: {
      header: "Teritorije",
      create: {
        header: "Kreiraj teritorijalnu poresku regiju",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu teritoriju."
      }
    },
    prefecture: {
      header: "Prefekture",
      create: {
        header: "Kreiraj Prefekturalnu Poresku Regiju",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu prefekturu."
      }
    },
    district: {
      header: "Okrug",
      create: {
        header: "Kreiraj Okru\u017Enu Poresku Regiju",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111eni okrug."
      }
    },
    governorate: {
      header: "Guvernerati",
      create: {
        header: "Kreiraj Poresku Regiju Guvernerata",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111enu guberniju."
      }
    },
    canton: {
      header: "Kantoni",
      create: {
        header: "Kreiraj Kantonsku Poresku Regiju",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111eni kanton."
      }
    },
    emirate: {
      header: "Emirati",
      create: {
        header: "Kreiraj Emiratsku Poresku Regiju",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111eni emirate."
      }
    },
    sublevel: {
      header: "Podnivoi",
      create: {
        header: "Kreiraj podnivo poreske regije",
        hint: "Kreiraj novu poresku regiju da defini\u0161e\u0161 poreske stope za odre\u0111eni podnivou."
      }
    },
    taxOverrides: {
      header: "Overrides - preklapanja",
      create: {
        header: "Kreirati Preklapanje",
        hint: "Kreiraj poresku stopu koja nadma\u0161uje podrazumijevane poreske stope za odabrane uslove."
      },
      edit: {
        header: "Izmijeni Prekid",
        hint: "Izmijeni poreznu stopu koja nadma\u0161uje zadate porezne stope za odabrane uslove."
      }
    },
    taxRates: {
      create: {
        header: "Kreiraj Poresku Stopu",
        hint: "Kreiraj novu poresku stopu da defini\u0161e\u0161 poresku stopu za region.",
        successToast: "Poreska stopa je uspje\u0161no kreirana."
      },
      edit: {
        header: "Izmijeni poresku stopu",
        hint: "Izmijeni poreznu stopu da defini\u0161e\u0161 poreznu stopu za region.",
        successToast: "Poreska stopa je uspje\u0161no a\u017Eurirana."
      },
      delete: {
        confirmation: "Spremate se da obri\u0161ete poresku stopu {{name}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
        successToast: "Poreska stopa je uspje\u0161no obrisana."
      }
    },
    fields: {
      isCombinable: {
        label: "Kombinabilan",
        hint: "Da li se ova poreska stopa mo\u017Ee kombinovati sa osnovnom stopom iz poreske regije.",
        true: "Kombinabilan",
        false: "Nije kombinovano"
      },
      defaultTaxRate: {
        label: "Podrazumijevana poreska stopa",
        tooltip: "Podrazumijevana poreska stopa za ovu regiju. Primjer je standardna PDV stopa za zemlju ili regiju.",
        action: "Kreiraj podrazumijevaju\u0107u poresku stopu"
      },
      taxRate: "Poreska stopa",
      taxCode: "Poreski zakon",
      targets: {
        label: "Ciljevi",
        hint: "Izaberi ciljeve na koje \u0107e se ova poreska stopa primenjivati.",
        options: {
          product: "Proizvodi",
          productCollection: "Kolekcije proizvoda",
          productTag: "Oznake proizvoda",
          productType: "Tipovi proizvoda",
          customerGroup: "Grupacije kupaca"
        },
        operators: {
          in: "u",
          on: "on",
          and: "i"
        },
        placeholders: {
          product: "Pretra\u017Ei proizvode",
          productCollection: "Pretra\u017Ei kolekcije proizvoda",
          productTag: "Pretra\u017Ei oznake proizvoda",
          productType: "Pretra\u017Ei tipove proizvoda",
          customerGroup: "Pretra\u017Ei grupe kupaca"
        },
        tags: {
          product: "Proizvod",
          productCollection: "Kolekcija proizvoda",
          productTag: "Proizvodna oznaka",
          productType: "Tip proizvoda",
          customerGroup: "Kupac grupa"
        },
        modal: {
          header: "Dodaj ciljeve"
        },
        values_one: "{{broj}} vrijednost",
        values_other: "{{count}} vrijednosti",
        numberOfTargets_one: "{{broj}} cilj",
        numberOfTargets_other: "{{broj}} ciljeva",
        additionalValues_one: "i {{count}} vi\u0161e vrijednosti",
        additionalValues_other: "i {{count}} vi\u0161e vrijednosti",
        action: "Dodaj cilj"
      },
      sublevels: {
        labels: {
          province: "Pokrajina",
          state: "Dr\u017Eava",
          region: "Region",
          stateOrTerritory: "Dr\u017Eava/Territorija",
          department: "Odjeljenje",
          county: "Okru\u017Eje",
          territory: "Teritorija",
          prefecture: "Prefektura",
          district: "Distrikt",
          governorate: "Guvernerat",
          emirate: "Emirati",
          canton: "Kanton",
          sublevel: "Podnivni kod"
        },
        placeholders: {
          province: "Izaberi provinciju",
          state: "Izaberi stanje",
          region: "Izaberi region",
          stateOrTerritory: "Izaberi dr\u017Eavu/teritoriju",
          department: "Izaberi odjeljenje",
          county: "Izaberi okrug",
          territory: "Izaberi teritoriju",
          prefecture: "Izaberi prefekturu",
          district: "Izaberi okrug",
          governorate: "Izaberi guberniju",
          emirate: "Izaberi emirate",
          canton: "Izaberi kanton"
        },
        tooltips: {
          sublevel: "Unesite ISO 3166-2 kod za podnivo poreske regije.",
          notPartOfCountry: "{{pokrajina}} se \u010Dini da nije deo {{zemlja}}. Molimo vas da ponovo proverite da li je ovo ta\u010Dno."
        },
        alert: {
          header: "Podnivoi regioni su onemogu\u0107eni za ovu poresku regiju",
          description: "Podnivni regioni su onemogu\u0107eni za ovu regiju po defaultu. Mo\u017Eete ih omogu\u0107iti da kreirate podnivni regione poput provincija, dr\u017Eava ili teritorija.",
          action: "Omogu\u0107i podnivo regije"
        }
      },
      noDefaultRate: {
        label: "Nema default stope",
        tooltip: "Ova poreska oblast nema podrazumijevaju\u0107u poresku stopu. Ako postoji standardna stopa, kao \u0161to je PDV neke zemlje, molimo vas da je dodate ovoj oblasti."
      }
    }
  },
  promotions: {
    domain: "Promocije",
    sections: {
      details: "Detalji promocije"
    },
    tabs: {
      template: "Tip",
      details: "Detalji",
      campaign: "Kampanja"
    },
    fields: {
      type: "Tip",
      value_type: "Vrsta Vrijednosti",
      value: "Vrijednost",
      campaign: "Kampanja",
      method: "Metoda",
      allocation: "Alokacija",
      addCondition: "Dodaj uslov",
      clearAll: "Jasno sve",
      amount: {
        tooltip: "Izaberi kod valute da omogu\u0107i\u0161 postavljanje iznosa"
      },
      conditions: {
        rules: {
          title: "Ko mo\u017Ee koristiti ovaj kod?",
          description: "Koji kupac ima pravo da koristi promotivni kod? Promotivni kod mo\u017Ee da koristi svi kupci ako ostane netaknut."
        },
        "target-rules": {
          title: "Na koje stavke \u0107e promocija biti primenjena?",
          description: "Promocija \u0107e biti primenjena na stavke koje odgovaraju slede\u0107im uslovima."
        },
        "buy-rules": {
          title: "\u0160ta treba da bude u korpi da se otklju\u010Da promocija?",
          description: "Ako se ovi uslovi poklapaju, omogu\u0107avamo promociju na ciljnim stavkama."
        }
      }
    },
    tooltips: {
      campaignType: "Kod valute mora biti odabran u promociji da bi se postavio bud\u017Eet za tro\u0161kove."
    },
    errors: {
      requiredField: "Obavezno polje",
      promotionTabError: "Ispravi gre\u0161ke u kartici Promocija prije nego \u0161to nastavi\u0161"
    },
    toasts: {
      promotionCreateSuccess: "Promocija ({{code}}) je uspje\u0161no kreirana."
    },
    create: {},
    edit: {
      title: "Izmijeni detalje promocije",
      rules: {
        title: "Izmijeni uslove kori\u0161\u0107enja"
      },
      "target-rules": {
        title: "Izmijeni uslove stavke"
      },
      "buy-rules": {
        title: "Izmijeni pravila kupovine"
      }
    },
    campaign: {
      header: "Kampanja",
      edit: {
        header: "Izmijeni Kampanju",
        successToast: "Uspe\u0161no a\u017Eurirana kampanja promocije."
      },
      actions: {
        goToCampaign: "Idi na kampanju"
      }
    },
    campaign_currency: {
      tooltip: "Ovo je valuta promocije. Promijeni je sa taba Detalji."
    },
    form: {
      required: "Potrebno",
      and: "I I",
      selectAttribute: "Izaberi Atribut",
      campaign: {
        existing: {
          title: "Postoje\u0107a kampanja",
          description: "Dodaj promociju postoje\u0107oj kampanji.",
          placeholder: {
            title: "Nema postoje\u0107ih kampanja",
            desc: "Mo\u017Ee\u0161 da napravi\u0161 jedan da prati\u0161 vi\u0161e promocija i postavi\u0161 bud\u017Eetske limite."
          }
        },
        new: {
          title: "Nova kampanja",
          description: "Kreiraj novu kampanju za ovu promociju."
        },
        none: {
          title: "Bez kampanje",
          description: "Nastavi bez povezivanja promocije sa kampanjom"
        }
      },
      status: {
        title: "Status"
      },
      method: {
        label: "Metoda",
        code: {
          title: "Kod za promociju",
          description: "Kupci moraju unijeti ovaj kod prilikom naplate"
        },
        automatic: {
          title: "Automatski",
          description: "Kupci \u0107e vidjeti ovu promociju prilikom naplate"
        }
      },
      max_quantity: {
        title: "Maksimalna Koli\u010Dina",
        description: "Maksimalna koli\u010Dina stavki na koje se ova promocija odnosi."
      },
      type: {
        standard: {
          title: "Standard",
          description: "Standardna promocija"
        },
        buyget: {
          title: "Kupiti Dobiti",
          description: "Kupite X, dobijate Y promociju"
        }
      },
      allocation: {
        each: {
          title: "Svaki",
          description: "Primjenjuje vrijednost na svaku stavku"
        },
        across: {
          title: "Preko",
          description: "Primjenjuje vrijednost na stavke"
        }
      },
      code: {
        title: "Kod",
        description: "Kod koji \u0107e va\u0161i kupci unijeti tokom naplate."
      },
      value: {
        title: "Promociona vrijednost"
      },
      value_type: {
        fixed: {
          title: "Promociona vrijednost",
          description: "Iznos koji treba da se odbije. npr. 100"
        },
        percentage: {
          title: "Promociona Vrijednost",
          description: "Procenat za popust sa iznosa. npr. 8%"
        }
      }
    },
    deleteWarning: "Spremate se da obri\u0161ete promociju {{code}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
    createPromotionTitle: "Kreiraj promociju",
    type: "Tip promocije",
    conditions: {
      add: "Dodaj uslov",
      list: {
        noRecordsMessage: "Dodaj uslov da ograni\u010Di\u0161 na koje stavke se promocija odnosi."
      }
    }
  },
  campaigns: {
    domain: "Kampanje",
    details: "Detalji kampanje",
    status: {
      active: "Aktivan",
      expired: "Istekao",
      scheduled: "Zakazan"
    },
    delete: {
      title: "Da li si siguran?",
      description: "Spremate se da obri\u0161ete kampanju '{{name}}'. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Kampanja '{{name}}' je uspje\u0161no kreirana."
    },
    edit: {
      header: "Izmijeni Kampanju",
      description: "Izmijeni detalje kampanje.",
      successToast: "Kampanja '{{name}}' je uspje\u0161no a\u017Eurirana."
    },
    configuration: {
      header: "Konfiguracija",
      edit: {
        header: "Izmijeni konfiguraciju kampanje",
        description: "Izmijeni konfiguraciju kampanje.",
        successToast: "Konfiguracija kampanje je uspje\u0161no a\u017Eurirana."
      }
    },
    create: {
      title: "Kreiraj Kampanju",
      description: "Kreiraj promotivnu kampanju.",
      hint: "Kreiraj promotivnu kampanju.",
      header: "Kreiraj Kampanju",
      successToast: "Kampanja '{{name}}' je uspje\u0161no kreirana."
    },
    fields: {
      name: "Ime",
      identifier: "Identifikator",
      start_date: "Datum po\u010Detka",
      end_date: "Krajnji datum",
      total_spend: "Bud\u017Eet potro\u0161en",
      total_used: "Bud\u017Eet kori\u0161\u0107en",
      budget_limit: "Bud\u017Eetski limit",
      campaign_id: {
        hint: "Samo kampanje sa istim kodom valute kao promocija su prikazane na ovoj listi."
      }
    },
    budget: {
      create: {
        hint: "Napravite bud\u017Eet za kampanju.",
        header: "Kampanja Bud\u017Eet"
      },
      details: "Bud\u017Eet kampanje",
      fields: {
        type: "Tip",
        currency: "Valuta",
        limit: "Limit",
        used: "Kori\u0161\u0107en."
      },
      type: {
        spend: {
          title: "Tro\u0161i",
          description: "Postavi limit na ukupni sni\u017Eeni iznos svih kori\u0161\u0107enja promocija."
        },
        usage: {
          title: "Upotreba",
          description: "Postavi ograni\u010Denje na koliko puta se promocija mo\u017Ee koristiti."
        }
      },
      edit: {
        header: "Izmijeni bud\u017Eet kampanje"
      }
    },
    promotions: {
      remove: {
        title: "Ukloni promociju iz kampanje",
        description: "Spremate se da uklonite {{count}} promociju/promocije iz kampanje. Ova akcija se ne mo\u017Ee poni\u0161titi."
      },
      alreadyAdded: "Ova promocija je ve\u0107 dodata kampanji.",
      alreadyAddedDiffCampaign: "Ova promocija je ve\u0107 dodata drugoj kampanji ({{name}}).",
      currencyMismatch: "Valuta promocije i kampanje se ne poklapa",
      toast: {
        success: "Uspje\u0161no dodato {{count}} promocija u kampanju"
      },
      add: {
        list: {
          noRecordsMessage: "Kreiraj promociju prvo."
        }
      },
      list: {
        noRecordsMessage: "Nema promocija u kampanji."
      }
    },
    deleteCampaignWarning: "Vi ste na putu da obri\u0161ete kampanju {{name}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
    totalSpend: "<0>{{iznos}}</0> <1>{{valuta}}</1>"
  },
  priceLists: {
    domain: "Cjenovnici",
    subtitle: "Kreiraj prodaje ili poni\u0161ti cijene za specifi\u010Dne uslove.",
    delete: {
      confirmation: "Spremate se da obri\u0161ete cjenovnik {{title}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Cjenovnik {{title}} je uspje\u0161no obrisan."
    },
    create: {
      header: "Kreiraj Cjenovnik",
      subheader: "Kreiraj novu cjenovnu listu da upravlja\u0161 cijenama svojih proizvoda.",
      tabs: {
        details: "Detalji",
        products: "Proizvodi",
        prices: "Cijene"
      },
      successToast: "Cjenovnik {{title}} je uspje\u0161no kreiran.",
      products: {
        list: {
          noRecordsMessage: "Kreiraj proizvod prvo."
        }
      }
    },
    edit: {
      header: "Izmijeni Cjenovnik",
      successToast: "Cjenovnik {{title}} je uspje\u0161no a\u017Euriran."
    },
    configuration: {
      header: "Konfiguracija",
      edit: {
        header: "Izmijeni konfiguraciju cjenovnika",
        description: "Izmijeni konfiguraciju cjenovnika.",
        successToast: "Konfiguracija cjenovnika je uspje\u0161no a\u017Eurirana."
      }
    },
    products: {
      header: "Proizvodi",
      actions: {
        addProducts: "Dodaj proizvode",
        editPrices: "Izmijeni cijene"
      },
      delete: {
        confirmation_one: "Spremate se da obri\u0161ete cene za {{count}} proizvod u cenovniku. Ova akcija se ne mo\u017Ee poni\u0161titi.",
        confirmation_other: "Spremate se da obri\u0161ete cene za {{count}} proizvoda u cenovniku. Ova radnja se ne mo\u017Ee poni\u0161titi.",
        successToast_one: "Uspe\u0161no obrisane cene za {{count}} proizvod.",
        successToast_other: "Uspe\u0161no obrisane cene za {{count}} proizvode."
      },
      add: {
        successToast: "Cijene su uspje\u0161no dodate na cjenovnik."
      },
      edit: {
        successToast: "Cijene su uspje\u0161no a\u017Eurirane."
      }
    },
    fields: {
      priceOverrides: {
        label: "Cijene prevazilaze",
        header: "Cijene Prekora\u010Denja"
      },
      status: {
        label: "Status",
        options: {
          active: "Aktivan",
          draft: "Nacrt",
          expired: "Istekao",
          scheduled: "Zakazan"
        }
      },
      type: {
        label: "Tip",
        hint: "Izaberi tip cjenovnika koji \u017Eeli\u0161 da napravi\u0161.",
        options: {
          sale: {
            label: "Sale",
            description: "Cijene prodaje su privremene promjene cijena za proizvode."
          },
          override: {
            label: "Override - preklapanje",
            description: "Overrides se obi\u010Dno koriste za kreiranje cijena specifi\u010Dnih za kupca."
          }
        }
      },
      startsAt: {
        label: "Cjenovnik ima datum po\u010Detka?",
        hint: "Zakazati cjenovnik da se aktivira u budu\u0107nosti."
      },
      endsAt: {
        label: "Cjenovnik ima datum isteka?",
        hint: "Zakazati cjenovnik za deaktivaciju u budu\u0107nosti."
      },
      customerAvailability: {
        header: "Izaberi grupe kupaca",
        label: "Dostupnost kupca",
        hint: "Odaberi koje grupe kupaca treba da se primene na cenovnik.",
        placeholder: "Pretra\u017Ei grupe kupaca",
        attribute: "Kupac grupe"
      }
    }
  },
  profile: {
    domain: "Profil",
    manageYourProfileDetails: "Upravljaj svojim profilom detaljima.",
    fields: {
      languageLabel: "Jezik",
      usageInsightsLabel: "Kori\u0161\u0107enje uvida"
    },
    edit: {
      header: "Uredi Profil",
      languageHint: "Jezik koji \u017Eelite da koristite u administratorskoj kontrolnoj tabli. Ovo ne menja jezik va\u0161e prodavnice.",
      languagePlaceholder: "Izaberi jezik",
      usageInsightsHint: "Dijelite uvide o kori\u0161\u0107enju i pomozite nam da pobolj\u0161amo Medusu. Mo\u017Eete pro\u010Ditati vi\u0161e o tome \u0161ta prikupljamo i kako to koristimo u na\u0161oj <0>dokumentaciji</0>."
    },
    toast: {
      edit: "Promjene profila sa\u010Duvane"
    }
  },
  users: {
    domain: "Korisnici",
    editUser: "Izmeni Korisnika",
    inviteUser: "Pozovi Korisnika",
    inviteUserHint: "Pozovi novog korisnika u svoju prodavnicu.",
    sendInvite: "Po\u0161alji pozivnicu",
    pendingInvites: "Na \u010Dekanju Pozivnice",
    deleteInviteWarning: "Spremate se da obri\u0161ete pozivnicu za {{email}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    resendInvite: "Ponovno po\u0161alji pozivnicu",
    copyInviteLink: "Kopiraj link za poziv",
    expiredOnDate: "Isteklo {{date}}",
    validFromUntil: "Va\u017Ei od <0>{{from}}</0> - <1>{{until}}</1>",
    acceptedOnDate: "Prihva\u0107eno na {{date}}",
    inviteStatus: {
      accepted: "Prihva\u0107en",
      pending: "Na \u010Dekanju",
      expired: "Istekao"
    },
    roles: {
      admin: "Admin - administrator",
      developer: "Razvija\u010D",
      member: "\u010Clan"
    },
    deleteUserWarning: "Spremate se da obri\u0161ete korisnika {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    invite: "Pozovi"
  },
  store: {
    domain: "Prodavnica",
    manageYourStoresDetails: "Upravljaj detaljima svoje prodavnice",
    editStore: "Izmeni prodavnicu",
    defaultCurrency: "Podrazumijevana valuta",
    defaultRegion: "Podrazumijevana regija",
    swapLinkTemplate: "Zamjena link \u0161ablona",
    paymentLinkTemplate: "\u0160ablon za link za pla\u0107anje",
    inviteLinkTemplate: "Pozivni link \u0161ablon",
    currencies: "Valute",
    addCurrencies: "Dodaj valute",
    enableTaxInclusivePricing: "Omogu\u0107i cijene koje uklju\u010Duju porez",
    disableTaxInclusivePricing: "Onemogu\u0107i cijene koje uklju\u010Duju porez",
    removeCurrencyWarning_one: "Spremate se da uklonite {{count}} valutu iz va\u0161e prodavnice. Osigurajte da ste uklonili sve cene koriste\u0107i valutu pre nego \u0161to nastavite.",
    removeCurrencyWarning_other: "Spremate se da uklonite {{count}} valuta iz va\u0161e prodavnice. Osigurajte da ste uklonili sve cene koriste\u0107i valute pre nego \u0161to nastavite.",
    currencyAlreadyAdded: "Valuta je ve\u0107 dodata u va\u0161u prodavnicu.",
    edit: {
      header: "Uredi Prodavnicu"
    },
    toast: {
      update: "Prodavnica uspje\u0161no a\u017Eurirana",
      currenciesUpdated: "Valute su uspje\u0161no a\u017Eurirane",
      currenciesRemoved: "Uklonjene valute iz prodavnice uspje\u0161no",
      updatedTaxInclusivitySuccessfully: "Cijena koja uklju\u010Duje porez je uspje\u0161no a\u017Eurirana"
    }
  },
  regions: {
    domain: "Regioni",
    subtitle: "Region je podru\u010Dje u kojem prodaje\u0161 proizvode. Mo\u017Ee obuhvatiti vi\u0161e zemalja i ima razli\u010Dite poreze, pru\u017Eaoce usluga i valute.",
    createRegion: "Kreiraj Region",
    createRegionHint: "Upravljaj poreskim stopama i pru\u017Eaocima usluga za skup zemalja.",
    addCountries: "Dodaj dr\u017Eave",
    editRegion: "Izmijeni Region",
    countriesHint: "Dodaj zemlje uklju\u010Dene u ovu regiju.",
    deleteRegionWarning: "Spremate se da obri\u0161ete region {{name}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
    removeCountriesWarning_one: "Ukloni\u0107e\u0161 {{count}} dr\u017Eavu iz regiona. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    removeCountriesWarning_other: "Ukloni\u0107e\u0161 {{count}} zemalja iz regiona. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    removeCountryWarning: "Spremate se da uklonite zemlju {{name}} iz regiona. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    automaticTaxesHint: "Kada je omogu\u0107eno, porezi \u0107e se obra\u010Dunavati samo prilikom naplate na osnovu adrese za isporuku.",
    taxInclusiveHint: "Kada je omogu\u0107eno, cijene u regionu \u0107e biti uklju\u010Dene u porez.",
    providersHint: "Dodaj koji su provajderi pla\u0107anja dostupni u ovoj regiji.",
    shippingOptions: "Opcije dostave",
    deleteShippingOptionWarning: "Spremate se da obri\u0161ete opciju dostave {{name}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
    return: "Povratak",
    outbound: "Izlazni",
    priceType: "Cijena Tip",
    flatRate: "Fiksna tarifa",
    calculated: "Izra\u010Dunato",
    list: {
      noRecordsMessage: "Kreiraj region za oblasti u kojima prodaje\u0161."
    },
    toast: {
      delete: "Region je uspje\u0161no obrisan",
      edit: "Region ure\u0111ivanje sa\u010Duvano",
      create: "Region je uspje\u0161no kreiran",
      countries: "Region zemlje a\u017Eurirane uspje\u0161no"
    },
    shippingOption: {
      createShippingOption: "Kreiraj Opciju Dostave",
      createShippingOptionHint: "Kreiraj novu opciju dostave za region.",
      editShippingOption: "Izmijeni Opciju Dostave",
      fulfillmentMethod: "Metod ispunjenja",
      type: {
        outbound: "Izlazni",
        outboundHint: "Koristi ovo ako kreira\u0161 opciju za dostavu za slanje proizvoda kupcu.",
        return: "Povratak",
        returnHint: "Koristite ovo ako kreirate opciju dostave za kupca da vrati proizvode vama."
      },
      priceType: {
        label: "Cijena Tip",
        flatRate: "Fiksna tarifa",
        calculated: "Izra\u010Dunato"
      },
      availability: {
        adminOnly: "Samo za administratore",
        adminOnlyHint: "Kada je omogu\u0107eno, opcija dostave \u0107e biti dostupna samo u administratorskoj kontrolnoj tabli, a ne u prodavnici."
      },
      taxInclusiveHint: "Kada je omogu\u0107eno, cijena opcije dostave \u0107e biti uklju\u010Dena u porez.",
      requirements: {
        label: "Zahtevi",
        hint: "Odredi zahtjeve za opciju dostave."
      }
    }
  },
  taxes: {
    domain: "Poreske regije",
    domainDescription: "Upravljaj svojom poreskom regijom",
    countries: {
      taxCountriesHint: "Poreska pode\u0161avanja se primenjuju na navedene zemlje."
    },
    settings: {
      editTaxSettings: "Izmijeni Poreske Postavke",
      taxProviderLabel: "Poreski pru\u017Ealac",
      systemTaxProviderLabel: "Sistem Poreski Pru\u017Ealac",
      calculateTaxesAutomaticallyLabel: "Izra\u010Dunaj poreze automatski",
      calculateTaxesAutomaticallyHint: "Kada je omogu\u0107eno, porezi \u0107e se automatski izra\u010Dunavati i primenjivati na korpe. Kada je onemogu\u0107eno, porezi se moraju ru\u010Dno obra\u010Dunati prilikom naplate. Ru\u010Dni porezi se preporu\u010Duju za kori\u0161\u0107enje sa pru\u017Eaocima poreza tre\u0107ih strana.",
      applyTaxesOnGiftCardsLabel: "Primijeni poreze na poklon kartice",
      applyTaxesOnGiftCardsHint: "Kada je omogu\u0107eno, porezi \u0107e biti primijenjeni na poklon kartice prilikom pla\u0107anja. U nekim zemljama, poreski propisi zahtijevaju primjenu poreza na poklon kartice prilikom kupovine.",
      defaultTaxRateLabel: "Podrazumijevana poreska stopa",
      defaultTaxCodeLabel: "Podrazumijevaju\u0107i poreski kod"
    },
    defaultRate: {
      sectionTitle: "Podrazumijevana poreska stopa"
    },
    taxRate: {
      sectionTitle: "Poreske stope",
      createTaxRate: "Kreiraj Poresku Stopu",
      createTaxRateHint: "Kreiraj novu poresku stopu za region.",
      deleteRateDescription: "Spremate se da obri\u0161ete poresku stopu {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      editTaxRate: "Izmijeni poreznu stopu",
      editRateAction: "Izmeni stopu",
      editOverridesAction: "Izmjeni preklapanja",
      editOverridesTitle: "Izmijeni stope poreza prekomjerno",
      editOverridesHint: "Odredi prepravke za poresku stopu.",
      deleteTaxRateWarning: "Spremate se da obri\u0161ete poresku stopu {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      productOverridesLabel: "Proizvod nadma\u0161uje",
      productOverridesHint: "Odredi proizvode koji imaju prioritet za poresku stopu.",
      addProductOverridesAction: "Dodaj proizvodna preklapanja",
      productTypeOverridesLabel: "Tip proizvoda preuzima",
      productTypeOverridesHint: "Odredi tip proizvoda koji nadma\u0161uje poreznu stopu.",
      addProductTypeOverridesAction: "Dodaj tip proizvoda koji preuzima prioritet",
      shippingOptionOverridesLabel: "Opcija dostave preuzima prioritet",
      shippingOptionOverridesHint: "Odredi opcije isporuke koje nadma\u0161uju poresku stopu.",
      addShippingOptionOverridesAction: "Dodaj opcije za preusmjeravanje dostave",
      productOverridesHeader: "Proizvodi",
      productTypeOverridesHeader: "Tipovi proizvoda",
      shippingOptionOverridesHeader: "Opcije dostave"
    }
  },
  locations: {
    domain: "Lokacije",
    editLocation: "Uredi lokaciju",
    addSalesChannels: "Dodaj prodajne kanale",
    noLocationsFound: "Nema lokacija prona\u0111enih",
    selectLocations: "Izaberi lokacije koje imaju artikl.",
    deleteLocationWarning: "Spremate se da obri\u0161ete lokaciju {{name}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
    removeSalesChannelsWarning_one: "Ukloni\u0107e\u0161 {{count}} prodajni kanal sa lokacije.",
    removeSalesChannelsWarning_other: "Ukloni\u0107e\u0161 {{count}} prodajnih kanala sa lokacije.",
    toast: {
      create: "Lokacija je uspje\u0161no kreirana",
      update: "Lokacija a\u017Eurirana uspje\u0161no",
      removeChannel: "Prodajni kanal uspje\u0161no uklonjen"
    }
  },
  reservations: {
    domain: "Rezervacije",
    subtitle: "Upravljaj rezervisanom koli\u010Dinom inventarskih stavki.",
    deleteWarning: "Spremate se da obri\u0161ete rezervaciju. Ova akcija se ne mo\u017Ee poni\u0161titi."
  },
  salesChannels: {
    domain: "Prodajni kanali",
    subtitle: "Upravljaj online i offline kanalima na kojima prodaje\u0161 proizvode.",
    createSalesChannel: "Kreiraj Prodajni Kanal",
    createSalesChannelHint: "Kreiraj novi prodajni kanal za prodaju svojih proizvoda.",
    enabledHint: "Odredi da li je prodajni kanal omogu\u0107en.",
    removeProductsWarning_one: "Ukloni\u0107e\u0161 {{count}} proizvod iz {{sales_channel}}.",
    removeProductsWarning_other: "Ukloni\u0107e\u0161 {{count}} proizvoda iz {{sales_channel}}.",
    addProducts: "Dodaj Proizvode",
    editSalesChannel: "Uredi prodajni kanal",
    productAlreadyAdded: "Proizvod je ve\u0107 dodat u prodajni kanal.",
    deleteSalesChannelWarning: "Spremate se da obri\u0161ete prodajni kanal {{name}}. Ova akcija se ne mo\u017Ee poni\u0161titi.",
    toast: {
      create: "Prodajni kanal je uspje\u0161no kreiran",
      update: "Prodajni kanal uspje\u0161no a\u017Euriran",
      delete: "Prodajni kanal je uspje\u0161no obrisan"
    },
    products: {
      list: {
        noRecordsMessage: "Nema proizvoda u prodajnom kanalu."
      },
      add: {
        list: {
          noRecordsMessage: "Kreiraj proizvod prvo."
        }
      }
    }
  },
  apiKeyManagement: {
    domain: {
      publishable: "Objavljivi API klju\u010Devi",
      secret: "Tajni API klju\u010Devi"
    },
    subtitle: {
      publishable: "Upravljaj API klju\u010Devima koji se koriste u prodavnici kako bi se ograni\u010Dio opseg zahteva na specifi\u010Dne prodajne kanale.",
      secret: "Upravljaj API klju\u010Devima koji se koriste za autentifikaciju administratorskih korisnika u administratorskim aplikacijama."
    },
    status: {
      active: "Aktivan",
      revoked: "Oduzet"
    },
    type: {
      publishable: "Objavljiv.",
      secret: "Tajna"
    },
    create: {
      createPublishableHeader: "Kreiraj objavljivi API klju\u010D",
      createPublishableHint: "Kreiraj novi objavljivi API klju\u010D da ograni\u010Di\u0161 opseg zahteva na specifi\u010Dne prodajne kanale.",
      createSecretHeader: "Kreiraj tajni API klju\u010D",
      createSecretHint: "Kreiraj novi tajni API klju\u010D za pristup Medusa API-ju kao autentifikovani admin korisnik.",
      secretKeyCreatedHeader: "Tajni Klju\u010D Kreiran",
      secretKeyCreatedHint: "Tvoj novi tajni klju\u010D je generisan. Kopiraj i sigurno ga sa\u010Duvaj sada. Ovo je jedini put kada \u0107e biti prikazan.",
      copySecretTokenSuccess: "Tajni klju\u010D je kopiran u me\u0111uspremnik.",
      copySecretTokenFailure: "Nije uspjelo kopiranje tajnog klju\u010Da u me\u0111uspremnik.",
      successToast: "API klju\u010D je uspje\u0161no kreiran."
    },
    edit: {
      header: "Izmijeni API Klju\u010D",
      description: "Izmijeni naslov API klju\u010Da.",
      successToast: "API klju\u010D {{title}} je uspje\u0161no a\u017Euriran."
    },
    salesChannels: {
      title: "Dodaj Prodajne Kanale",
      description: "Dodaj prodajne kanale kojima bi API klju\u010D trebao biti ograni\u010Den.",
      successToast_one: "{{count}} prodajni kanal je uspje\u0161no dodat u API klju\u010D.",
      successToast_other: "{{count}} prodajnih kanala je uspje\u0161no dodato API klju\u010Da.",
      alreadyAddedTooltip: "Prodajni kanal je ve\u0107 dodat u API klju\u010D.",
      list: {
        noRecordsMessage: "Nema prodajnih kanala u opsegu objavljivog API klju\u010Da."
      }
    },
    delete: {
      warning: "Spremate se da obri\u0161ete API klju\u010D {{title}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "API klju\u010D {{title}} je uspje\u0161no obrisan."
    },
    revoke: {
      warning: "Vi ste na putu da opozovete API klju\u010D {{title}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "API klju\u010D {{title}} je uspje\u0161no opozvan."
    },
    addSalesChannels: {
      list: {
        noRecordsMessage: "Kreiraj prodajni kanal prvo."
      }
    },
    removeSalesChannel: {
      warning: "Spremate se da uklonite prodajni kanal {{name}} iz API klju\u010Da. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      warningBatch_one: "Spremate se da uklonite {{count}} prodajni kanal iz API klju\u010Da. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      warningBatch_other: "Spremate se da uklonite {{count}} prodajnih kanala iz API klju\u010Da. Ova akcija se ne mo\u017Ee poni\u0161titi.",
      successToast: "Prodajni kanal je uspje\u0161no uklonjen iz API klju\u010Da.",
      successToastBatch_one: "{{count}} prodajni kanal je uspje\u0161no uklonjen iz API klju\u010Da.",
      successToastBatch_other: "{{count}} prodajnih kanala je uspje\u0161no uklonjeno iz API klju\u010Da."
    },
    actions: {
      revoke: "Poni\u0161ti API klju\u010D",
      copy: "Kopiraj API klju\u010D",
      copySuccessToast: "API klju\u010D je kopiran u me\u0111uspremnik."
    },
    table: {
      lastUsedAtHeader: "Posljednji put kori\u0161\u0107eno u",
      createdAtHeader: "Oduzeto Na"
    },
    fields: {
      lastUsedAtLabel: "Posljednji put kori\u0161\u0107eno u",
      revokedByLabel: "Oduzeto od",
      revokedAtLabel: "Oduzeto na",
      createdByLabel: "Kreirano od"
    }
  },
  returnReasons: {
    domain: "Razlozi za povratak",
    subtitle: "Upravljaj razlozima za vra\u0107ene stavke.",
    calloutHint: "Upravljaj razlozima za kategorizaciju povrata.",
    editReason: "Izmijeni Razlog Vra\u0107anja",
    create: {
      header: "Dodaj Razlog Vra\u0107anja",
      subtitle: "Odredi naj\u010De\u0161\u0107e razloge za povrat.",
      hint: "Kreiraj novi razlog za vra\u0107anje da bi se kategorizovala vra\u0107anja.",
      successToast: "Razlog povrata {{label}} je uspje\u0161no kreiran."
    },
    edit: {
      header: "Izmijeni Razlog Vra\u0107anja",
      subtitle: "Izmijeni vrijednost razloga povrata.",
      successToast: "Razlog vra\u0107anja {{label}} je uspje\u0161no a\u017Euriran."
    },
    delete: {
      confirmation: "Spremate se da obri\u0161ete razlog povrata {{label}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Razlog vra\u0107anja {{label}} je uspje\u0161no obrisan."
    },
    fields: {
      value: {
        label: "Vrijednost",
        placeholder: "pogre\u0161na_veli\u010Dina",
        tooltip: "Vrijednost bi trebala biti jedinstveni identifikator za razlog povrata."
      },
      label: {
        label: "Oznaka",
        placeholder: "Pogre\u0161na veli\u010Dina"
      },
      description: {
        label: "Opis",
        placeholder: "Kupac je primio pogre\u0161nu veli\u010Dinu"
      }
    }
  },
  login: {
    forgotPassword: "Zaboravili ste lozinku? - <0>Resetovati</0>",
    title: "Dobrodo\u0161ao u Meduzu",
    hint: "Prijavite se da biste pristupili podru\u010Dju ra\u010Duna"
  },
  invite: {
    title: "Dobrodo\u0161ao u Meduzu",
    hint: "Kreirajte svoj nalog ispod",
    backToLogin: "Nazad na prijavu",
    createAccount: "Kreiraj nalog",
    alreadyHaveAccount: "Ve\u0107 imate nalog? - <0>Prijavite se</0>",
    emailTooltip: "Va\u0161 email ne mo\u017Ee biti promenjen. Ako \u017Eelite da koristite drugi email, nova pozivnica mora biti poslata.",
    invalidInvite: "Pozivnica je neva\u017Ee\u0107a ili je istekao rok.",
    successTitle: "Va\u0161 nalog je registrovan",
    successHint: "Zapo\u010Dni odmah sa Medusa Admin.",
    successAction: "Start Medusa Admin",
    invalidTokenTitle: "Va\u0161 pozivni token je neva\u017Ee\u0107i",
    invalidTokenHint: "Poku\u0161aj da zatra\u017Ei\u0161 novu pozivnicu.",
    passwordMismatch: "Lozinke se ne poklapaju",
    toast: {
      accepted: "Poziv uspje\u0161no prihva\u0107en"
    }
  },
  resetPassword: {
    title: "Resetovanje lozinke",
    hint: "Unesite svoju email adresu ispod, i posla\u0107emo vam uputstva o tome kako da resetujete svoju lozinku.",
    email: "Email",
    sendResetInstructions: "Po\u0161alji uputstva za resetovanje",
    backToLogin: "Nazad na prijavu",
    newPasswordHint: "Izaberi novu lozinku ispod.",
    invalidTokenTitle: "Va\u0161 reset token je neva\u017Ee\u0107i",
    invalidTokenHint: "Poku\u0161aj da zatra\u017Ei\u0161 novu vezu za resetovanje.",
    expiredTokenTitle: "Va\u0161 token za resetovanje je istekao",
    goToResetPassword: "Idi na Resetovanje Lozinke",
    resetPassword: "Resetovanje lozinke",
    newPassword: "Nova lozinka",
    repeatNewPassword: "Ponovi novu lozinku",
    tokenExpiresIn: "Token isti\u010De za <0>{{time}}</0> minuta",
    successfulRequestTitle: "Uspe\u0161no ti je poslat email",
    successfulRequest: "Poslali smo ti email koji mo\u017Ee\u0161 koristiti da resetuje\u0161 svoju lozinku. Proveri svoj spam folder ako ga nisi primio nakon nekoliko minuta.",
    successfulResetTitle: "Resetovanje lozinke uspje\u0161no",
    successfulReset: "Molimo vas da se prijavite na stranici za prijavu.",
    passwordMismatch: "Lozinke se ne poklapaju",
    invalidLinkTitle: "Va\u0161 link za resetovanje je neva\u017Ee\u0107i",
    invalidLinkHint: "Poku\u0161aj ponovo da resetuje\u0161 svoju lozinku."
  },
  workflowExecutions: {
    domain: "Radni tokovi",
    subtitle: "Pogledaj i prati izvr\u0161enja radnog toka u tvojoj Medusa aplikaciji.",
    transactionIdLabel: "ID transakcije",
    workflowIdLabel: "Workflow ID - ID toka rada",
    progressLabel: "Napredak",
    stepsCompletedLabel_one: "{{zavr\u0161eno}} od {{broj}} koraka",
    stepsCompletedLabel_other: "{{zavr\u0161eno}} od {{broj}} koraka",
    list: {
      noRecordsMessage: "Nema radnih tokova koji su izvr\u0161eni, jo\u0161."
    },
    history: {
      sectionTitle: "Istorija",
      runningState: "Tr\u010Danje...",
      awaitingState: "\u010Cekanje",
      failedState: "Neuspjeh",
      skippedState: "Presko\u010Deno",
      skippedFailureState: "Presko\u010Deno (Neuspjeh)",
      definitionLabel: "Definicija",
      outputLabel: "Izlaz",
      compensateInputLabel: "Kompenzovati ulaz",
      revertedLabel: "Revertovan",
      errorLabel: "Gre\u0161ka"
    },
    state: {
      done: "Zavr\u0161eno",
      failed: "Neuspjeh",
      reverted: "Revertovan",
      invoking: "Pozivanje",
      compensating: "Kompenzacija",
      notStarted: "Nije po\u010Delo"
    },
    transaction: {
      state: {
        waitingToCompensate: "\u010Cekanje da se nadoknadi"
      }
    },
    step: {
      state: {
        skipped: "Presko\u010Deno",
        skippedFailure: "Presko\u010Deno (Neuspjeh)",
        dormant: "Sanjaju\u0107i",
        timeout: "Timeout - vremensko ograni\u010Denje"
      }
    }
  },
  productTypes: {
    domain: "Tipovi proizvoda",
    subtitle: "Organizujte svoje proizvode u tipove.",
    create: {
      header: "Kreiraj Tip Proizvoda",
      hint: "Kreiraj novu vrstu proizvoda da kategorizuje\u0161 svoje proizvode.",
      successToast: "Tip proizvoda {{value}} je uspje\u0161no kreiran."
    },
    edit: {
      header: "Izmijeni Tip Proizvoda",
      successToast: "Tip proizvoda {{value}} je uspje\u0161no a\u017Euriran."
    },
    delete: {
      confirmation: "Spremate se da obri\u0161ete tip proizvoda {{value}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Tip proizvoda {{value}} je uspje\u0161no obrisan."
    },
    fields: {
      value: "Vrijednost"
    }
  },
  productTags: {
    domain: "Proizvodni oznaci",
    create: {
      header: "Kreiraj oznaku proizvoda",
      subtitle: "Kreiraj novu oznaku proizvoda da kategorizuje\u0161 svoje proizvode.",
      successToast: "Proizvodna oznaka {{value}} je uspje\u0161no kreirana."
    },
    edit: {
      header: "Izmijeni oznaku proizvoda",
      subtitle: "Izmijeni vrijednost oznake proizvoda.",
      successToast: "Proizvodna oznaka {{value}} je uspje\u0161no a\u017Eurirana."
    },
    delete: {
      confirmation: "Spremate se da obri\u0161ete oznaku proizvoda {{value}}. Ova radnja se ne mo\u017Ee poni\u0161titi.",
      successToast: "Proizvodna oznaka {{value}} je uspje\u0161no obrisana."
    },
    fields: {
      value: "Vrijednost"
    }
  },
  notifications: {
    domain: "Obave\u0161tenja",
    emptyState: {
      title: "Nema obavje\u0161tenja",
      description: "Nemate trenutno nikakve obavijesti, ali kada ih dobijete, one \u0107e \u017Eivjeti ovdje."
    },
    accessibility: {
      description: "obavje\u0161tenja o aktivnostima Meduze bi\u0107e navedena ovdje."
    }
  },
  errors: {
    serverError: "Gre\u0161ka na serveru - Poku\u0161ajte ponovo kasnije.",
    invalidCredentials: "Pogre\u0161na adresa elektronske po\u0161te ili lozinka"
  },
  statuses: {
    scheduled: "Zakazan",
    expired: "Istekao",
    active: "Aktivan",
    enabled: "Omogu\u0107eno",
    disabled: "Onemogu\u0107en"
  },
  labels: {
    productVariant: "Proizvodna varijanta",
    prices: "Cijene",
    available: "Dostupan",
    inStock: "Na skladi\u0161tu",
    added: "Dodato",
    removed: "Uklonjen"
  },
  fields: {
    amount: "Iznos",
    refundAmount: "Iznos povrata",
    name: "Ime",
    default: "Podrazumijevano",
    lastName: "Prezime",
    firstName: "Ime",
    title: "Naslov",
    customTitle: "Prilago\u0111eni naslov",
    manageInventory: "Upravljaj inventarom",
    inventoryKit: "Ima inventarni komplet",
    inventoryItems: "Inventar stavke",
    inventoryItem: "Inventar stavka",
    requiredQuantity: "Potrebna koli\u010Dina",
    description: "Opis",
    email: "Email",
    password: "Lozinka",
    repeatPassword: "Ponovi lozinku",
    confirmPassword: "Potvrdi Lozinku",
    newPassword: "Nova lozinka",
    repeatNewPassword: "Ponovi novu lozinku",
    categories: "Kategorije",
    shippingMethod: "Na\u010Din isporuke",
    configurations: "Konfiguracije",
    conditions: "Uslovi",
    category: "Kategorija",
    collection: "Kolekcija",
    discountable: "Popustljiv",
    handle: "Ru\u010Dka",
    subtitle: "Podnaslov",
    item: "Stavka",
    qty: "koli\u010Dina",
    limit: "Limit",
    tags: "Oznake",
    type: "Tip",
    reason: "Razlog",
    none: "nijedan",
    all: "sve",
    search: "Pretraga",
    percentage: "Procenat",
    sales_channels: "Prodajni kanali",
    customer_groups: "Grupacije kupaca",
    product_tags: "Proizvodni oznaci",
    product_types: "Tipovi proizvoda",
    product_collections: "Proizvodne kolekcije",
    status: "Status",
    code: "Kod",
    value: "Vrijednost",
    disabled: "Onemogu\u0107en",
    dynamic: "Dinami\u010Dan",
    normal: "Normalan",
    years: "Godine",
    months: "Meseci",
    days: "Dani",
    hours: "Sati",
    minutes: "Minuti",
    totalRedemptions: "Ukupna Otkupljenja",
    countries: "Zemlje",
    paymentProviders: "Provajderi pla\u0107anja",
    refundReason: "Razlog za povratak",
    fulfillmentProviders: "Ispunjenje Pru\u017Eatelji",
    fulfillmentProvider: "Ispunjenje Pru\u017Eatelj",
    providers: "Pru\u017Eatelji",
    availability: "Dostupnost",
    inventory: "Inventar",
    optional: "Opcionalno",
    note: "Napomena",
    automaticTaxes: "Automatski Porezi",
    taxInclusivePricing: "Cijena koja uklju\u010Duje porez",
    currency: "Valuta",
    address: "Adresa",
    address2: "Stan, apartman, itd.",
    city: "Grad",
    postalCode: "Po\u0161tanski broj",
    country: "Zemlja",
    state: "Dr\u017Eava",
    province: "Pokrajina",
    company: "Kompanija",
    phone: "Telefon",
    metadata: "Metapodaci",
    selectCountry: "Izaberi dr\u017Eavu",
    products: "Proizvodi",
    variants: "Varijante",
    orders: "Naru\u010Divanja",
    account: "Ra\u010Dun",
    total: "Ukupno porud\u017Ebina",
    paidTotal: "Ukupno uhva\u0107eno",
    totalExclTax: "Ukupno bez poreza",
    subtotal: "Me\u0111uzbir",
    shipping: "\u0160aljenje",
    outboundShipping: "Izlazna isporuka",
    returnShipping: "Povratna dostava",
    tax: "Porez",
    created: "Kreiran",
    key: "Klju\u010D",
    customer: "Kupac",
    date: "Datum",
    order: "Redoslijed",
    fulfillment: "Ispunjenje",
    provider: "Pru\u017Ealac",
    payment: "Pla\u0107anje",
    items: "Stavke",
    salesChannel: "Prodajni Kanal",
    region: "Region",
    discount: "Popust",
    role: "Uloga",
    sent: "Poslato",
    salesChannels: "Prodajni kanali",
    product: "Proizvod",
    createdAt: "Kreiran",
    updatedAt: "A\u017Eurirano",
    revokedAt: "Oduzeto na",
    true: "Tako je.",
    false: "La\u017Eno",
    giftCard: "Poklon kartica",
    tag: "Oznaka",
    dateIssued: "Datum izdanja",
    issuedDate: "Datum izdavanja",
    expiryDate: "Datum isteka",
    price: "Cijena",
    priceTemplate: "Cijena {{regionOrCurrency}}",
    height: "Visina",
    width: "\u0160irina",
    length: "Du\u017Eina",
    weight: "Te\u017Eina",
    midCode: "MID kod",
    hsCode: "HS kod",
    ean: "EAN",
    upc: "UPC",
    inventoryQuantity: "Koli\u010Dina zaliha",
    barcode: "Barkod",
    countryOfOrigin: "Zemlja porekla",
    material: "Materijal",
    thumbnail: "Sli\u010Dica",
    sku: "SKU - SKU",
    managedInventory: "Upravljani inventar",
    allowBackorder: "Dozvoli narud\u017Ebinu na \u010Dekanju",
    inStock: "Na skladi\u0161tu",
    location: "Lokacija",
    quantity: "Koli\u010Dina",
    variant: "Varijanta",
    id: "ID",
    parent: "Roditelj",
    minSubtotal: "Min. Ukupno",
    maxSubtotal: "Max. Ukupno",
    shippingProfile: "\u0160aljivi Profil",
    summary: "Sa\u017Eetak",
    details: "Detalji",
    label: "Oznaka",
    rate: "Stopa",
    requiresShipping: "Zahteva isporuku",
    unitPrice: "Jedini\u010Dna cijena",
    startDate: "Datum po\u010Detka",
    endDate: "Krajnji datum",
    draft: "Nacrt",
    values: "Vrijednosti"
  },
  dateTime: {
    years_one: "Godina",
    years_other: "Godine",
    months_one: "Mjesec",
    months_other: "Mjeseci",
    weeks_one: "Nedelja",
    weeks_other: "Nedelje",
    days_one: "Dan",
    days_other: "Dani",
    hours_one: "Sat",
    hours_other: "Sati",
    minutes_one: "Minuta",
    minutes_other: "Minuti",
    seconds_one: "Drugi",
    seconds_other: "Sekunde"
  }
};

// src/i18n/translations/index.ts
var translations_default = {
  sr: {
    translation: sr_default
  },
  en: {
    translation: en_default
  }
};

// src/i18n/config.ts
var defaultI18nOptions = {
  debug: process.env.NODE_ENV === "development",
  detection: {
    caches: ["cookie", "localStorage", "header"],
    lookupCookie: "lng",
    lookupLocalStorage: "lng",
    order: ["cookie", "localStorage", "header"]
  },
  fallbackLng: "sr",
  interpolation: {
    escapeValue: false
  },
  resources: translations_default,
  supportedLngs: Object.keys(translations_default)
};

// src/components/utilities/i18n/i18n.tsx
var I18n = () => {
  if (i18n.isInitialized) {
    return null;
  }
  i18n.use(
    new LanguageDetector(null, {
      lookupCookie: "lng",
      lookupLocalStorage: "lng"
    })
  ).use(initReactI18next).init(defaultI18nOptions);
  return null;
};

export {
  i18n,
  I18n
};
