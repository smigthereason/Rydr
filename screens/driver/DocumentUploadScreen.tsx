import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';

interface DocumentStatus {
  id: string;
  title: string;
  status: 'error' | 'success' | 'pending' | 'disabled';
  description: string;
  details?: string;
  icon: string;
}

const documents: DocumentStatus[] = [
  {
    id: '1',
    title: "Driver's License",
    status: 'error',
    description: 'Front and back photo required. Please ensure expiration date is visible.',
    icon: 'badge',
  },
  {
    id: '2',
    title: 'Vehicle Registration',
    status: 'success',
    description: 'Uploaded successfully',
    details: 'Toyota Camry • AB-123-CD',
    icon: 'directions-car',
  },
  {
    id: '3',
    title: 'Proof of Insurance',
    status: 'pending',
    description: 'Ensure your name is clearly visible on the document.',
    icon: 'health-and-safety',
  },
  {
    id: '4',
    title: 'Background Check Consent',
    status: 'disabled',
    description: 'Sign the consent form digitally.',
    icon: 'encrypted',
  },
];

interface DocumentUploadScreenProps {
  navigation: any;
}

export default function DocumentUploadScreen({ navigation }: DocumentUploadScreenProps) {
  const insets = useSafeAreaInsets();
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 4;
  const progressPercentage = 50; // 2 of 4 = 50%

  const handleBack = () => {
    navigation.goBack();
  };

  const handleUploadLicense = () => {
    // Handle license upload
  };

  const handleEditRegistration = () => {
    // Handle registration edit
  };

  const handleInsuranceUpload = () => {
    // Handle insurance upload
  };

  const handleBackgroundCheck = () => {
    // Handle background check
  };

  const getStatusColor = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'error': return theme.colors.status.error;
      case 'success': return theme.colors.primaryGreen;
      case 'pending': return theme.colors.text.secondary;
      case 'disabled': return theme.colors.text.muted;
    }
  };

  const getStatusBackground = (status: DocumentStatus['status']) => {
    switch (status) {
      case 'error': return 'rgba(239, 68, 68, 0.1)';
      case 'success': return 'rgba(13, 242, 13, 0.1)';
      case 'pending': return 'rgba(255, 255, 255, 0.05)';
      case 'disabled': return 'rgba(255, 255, 255, 0.02)';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background.darkRed} />
      
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Document Upload</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressStep}>STEP {currentStep} OF {totalSteps}</Text>
          <Text style={styles.progressPercentage}>{progressPercentage}% Completed</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Math.max(insets.bottom, 20) + 100 }
        ]}
      >
        {/* Headline */}
        <View style={styles.headlineContainer}>
          <Text style={styles.headlineTitle}>Required Documents</Text>
          <Text style={styles.headlineDescription}>
            We need a few details to get you on the road. Please ensure photos are clear, well-lit, and text is readable.
          </Text>
        </View>

        {/* Documents List */}
        <View style={styles.documentsContainer}>
          {documents.map((doc) => (
            <View
              key={doc.id}
              style={[
                styles.documentCard,
                doc.status === 'error' && styles.documentCardError,
                doc.status === 'disabled' && styles.documentCardDisabled,
              ]}
            >
              {doc.status === 'success' && (
                <View style={styles.successBadge}>
                  <MaterialIcons name="check" size={16} color="#000" />
                </View>
              )}

              <View style={styles.documentContent}>
                <View style={styles.documentHeader}>
                  <View style={[
                    styles.iconContainer,
                    { backgroundColor: getStatusBackground(doc.status) }
                  ]}>
                    <MaterialIcons
                      name={doc.icon as any}
                      size={24}
                      color={getStatusColor(doc.status)}
                    />
                  </View>
                  
                  <View style={styles.documentInfo}>
                    <View style={styles.documentTitleRow}>
                      <Text style={styles.documentTitle}>{doc.title}</Text>
                      {doc.status === 'error' && (
                        <View style={styles.requiredBadge}>
                          <MaterialIcons name="error" size={14} color={theme.colors.status.error} />
                          <Text style={styles.requiredText}>Required</Text>
                        </View>
                      )}
                    </View>
                    
                    <Text style={[
                      styles.documentDescription,
                      doc.status === 'success' && styles.successDescription,
                      doc.status === 'disabled' && styles.disabledDescription,
                    ]}>
                      {doc.description}
                    </Text>
                    
                    {doc.details && (
                      <Text style={styles.documentDetails}>{doc.details}</Text>
                    )}
                  </View>
                </View>

                {/* Action Buttons */}
                {doc.status === 'error' && (
                  <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={handleUploadLicense}
                    activeOpacity={0.7}
                  >
                    <MaterialIcons name="upload-file" size={20} color={theme.colors.status.error} />
                    <Text style={styles.uploadButtonText}>Upload License</Text>
                  </TouchableOpacity>
                )}
                
                {doc.status === 'pending' && (
                  <TouchableOpacity
                    style={styles.uploadPendingCard}
                    onPress={handleInsuranceUpload}
                    activeOpacity={0.7}
                  >
                    <View style={styles.uploadIconContainer}>
                      <MaterialIcons name="add-a-photo" size={20} color={theme.colors.text.secondary} />
                    </View>
                  </TouchableOpacity>
                )}
                
                {doc.status === 'disabled' && (
                  <View style={styles.disabledArrow}>
                    <MaterialIcons name="chevron-right" size={20} color="rgba(255, 255, 255, 0.3)" />
                  </View>
                )}
              </View>

              {doc.status === 'success' && (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={handleEditRegistration}
                  activeOpacity={0.7}
                >
                  <MaterialIcons name="edit" size={20} color={theme.colors.text.secondary} />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <View style={[
        styles.footer,
        { paddingBottom: Math.max(insets.bottom, 20) }
      ]}>
        <LinearGradient
          colors={['rgba(34, 16, 19, 0)', 'rgba(34, 16, 19, 0.9)', 'rgba(34, 16, 19, 1)']}
          style={styles.footerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <TouchableOpacity 
            style={styles.submitButton} 
            disabled={true}
            activeOpacity={0.7}
          >
            <Text style={styles.submitButtonText}>Submit for Review</Text>
          </TouchableOpacity>
          <Text style={styles.requiredTextBottom}>Action required on 1 document</Text>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.darkRed,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: 'rgba(34, 16, 19, 0.95)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  headerPlaceholder: {
    width: 40,
  },
  progressContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    paddingBottom: theme.spacing.lg,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: theme.spacing.xs,
  },
  progressStep: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.primaryGreen,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  progressPercentage: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.text.secondary,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primaryGreen,
    borderRadius: theme.borderRadius.sm,
    shadowColor: theme.colors.primaryGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 0,
  },
  headlineContainer: {
    marginBottom: theme.spacing.lg,
  },
  headlineTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
    lineHeight: 38,
  },
  headlineDescription: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 20,
  },
  documentsContainer: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  documentCard: {
    backgroundColor: theme.colors.surface.darkRed,
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    padding: theme.spacing.md,
    position: 'relative',
    ...theme.shadows.sm,
  },
  documentCardError: {
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  documentCardDisabled: {
    opacity: 0.7,
  },
  successBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 24,
    height: 24,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.primaryGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  documentContent: {
    flex: 1,
  },
  documentHeader: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentInfo: {
    flex: 1,
  },
  documentTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text.primary,
    flex: 1,
  },
  requiredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 4,
    gap: 4,
  },
  requiredText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.status.error,
  },
  documentDescription: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    marginBottom: 4,
    lineHeight: 20,
  },
  successDescription: {
    color: theme.colors.primaryGreen,
    fontWeight: '500',
  },
  disabledDescription: {
    color: theme.colors.text.muted,
  },
  documentDetails: {
    fontSize: 12,
    color: theme.colors.text.muted,
    marginTop: 2,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xs,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderRadius: theme.borderRadius.lg,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.status.error,
  },
  uploadPendingCard: {
    alignSelf: 'flex-end',
  },
  uploadIconContainer: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledArrow: {
    alignSelf: 'flex-end',
  },
  editButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerGradient: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
  },
  submitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.lg,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text.muted,
  },
  requiredTextBottom: {
    fontSize: 12,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
  },
});